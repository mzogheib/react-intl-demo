import React from 'react';
import { IntlProvider } from 'react-intl';

import App from './App';

const Root = () => (
  <IntlProvider messages={{}} locale="en" defaultLocale="en">
    <App />
  </IntlProvider>
);

export default Root;
