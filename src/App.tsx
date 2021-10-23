import React from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural } from 'react-intl';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Components</h1>
        <div>
          Today's date is <FormattedDate value={Date.now()} />
        </div>
        <div>
          This is a formatted number <FormattedNumber value={10000.45} />
        </div>
        <div>
          This is a formatted currency{' '}
          <FormattedNumber value={2000.32} style={`currency`} currency="USD" />
        </div>
        <FormattedPlural value={5} one="5 dog" other="5 dogs" />
      </div>
    </div>
  );
}

export default App;
