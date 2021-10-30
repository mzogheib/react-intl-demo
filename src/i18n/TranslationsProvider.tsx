import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Locale } from '.';
import { fetchTranslations } from './translationsService';
import LanguageSelector from '../LanguageSelector';

// fetch the translations based on the locale
// display a placeholder while loading
// store the fetched messages in state for future changes

type Props = {
  children: ReactNode;
};

const TranslationsProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState(Locale.en);
  const [messages, setMessages] = useState<Record<string, string> | undefined>(
    undefined
  );

  useEffect(() => {
    const getTranslations = async () => {
      const messagesForLocale = await fetchTranslations(locale);
      setMessages(messagesForLocale);
    };

    getTranslations();
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={Locale.en}>
      <LanguageSelector selectedLocale={locale} onSelect={setLocale} />
      {messages && children}
    </IntlProvider>
  );
};

export default TranslationsProvider;
