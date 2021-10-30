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
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getTranslations = async () => {
      try {
        setIsError(false);
        const messagesForLocale = await fetchTranslations(locale);
        setMessages(messagesForLocale);
      } catch {
        setIsError(true);
      }
    };

    getTranslations();
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={Locale.en}>
      <LanguageSelector selectedLocale={locale} onSelect={setLocale} />
      {isError && <div>Error! :(</div>}
      {messages && !isError && children}
    </IntlProvider>
  );
};

export default TranslationsProvider;
