import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Locale, messages } from './i18n';
import App from './App';
import LanguageSelector from './LanguageSelector';

const Root = () => {
  const [locale, setLocale] = useState(Locale.en);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={Locale.en}
    >
      <LanguageSelector selectedLocale={locale} onSelect={setLocale} />
      <App />
    </IntlProvider>
  );
};

export default Root;
