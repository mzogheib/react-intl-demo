import React from 'react';

import TranslationsProvider from './i18n/TranslationsProvider';
import App from './App';

const Root = () => (
  <TranslationsProvider>
    <App />
  </TranslationsProvider>
);

export default Root;
