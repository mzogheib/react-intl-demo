import React from 'react';
import { IntlProvider } from 'react-intl';

import App from './App';
import { Locale, messages } from './i18n';

const locale = Locale.jp;

const Root = () => (
  <IntlProvider
    messages={messages[locale]}
    locale={locale}
    defaultLocale={Locale.en}
  >
    <App />
  </IntlProvider>
);

export default Root;
