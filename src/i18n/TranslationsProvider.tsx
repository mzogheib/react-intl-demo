import React, { ReactNode, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Locale, messages } from '.';
import LanguageSelector from '../LanguageSelector';

type Props = {
  children: ReactNode;
};

const TranslationsProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState(Locale.en);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={Locale.en}
    >
      <LanguageSelector selectedLocale={locale} onSelect={setLocale} />
      {children}
    </IntlProvider>
  );
};

export default TranslationsProvider;
