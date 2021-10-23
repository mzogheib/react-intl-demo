import React from 'react';
import { FormattedDate, FormattedNumber, IntlProvider } from 'react-intl';

import './App.css';

function App() {
  return (
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <div className="App">
        <div>
          Today's date is <FormattedDate value={Date.now()} />
        </div>
        <div>
          This is a formatted number <FormattedNumber value={2000.45} />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
