import React from 'react';
import { IntlProvider } from 'react-intl';

import App from './App';

enum Locale {
  en = 'en',
  de = 'de',
  jp = 'jp',
}

const messages = {
  [Locale.en]: {
    date: 'date',
    number: 'number',
    currency: 'currency',
    animal: 'animal',
    dog: 'dog',
  },
  [Locale.de]: {
    dog: 'Hund',
  },
  [Locale.jp]: {
    dog: '犬',
  },
};

const locale = Locale.en;

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
