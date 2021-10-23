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
    animal: 'animal',
    currency: 'currency',
    date: 'date',
    dog: 'dog',
    number: 'number',
  },
  [Locale.de]: {
    dog: 'Hund',
  },
  [Locale.jp]: {
    animal: '動物',
    currency: '通貨',
    date: '日にち',
    dog: '犬',
    number: '番号',
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
