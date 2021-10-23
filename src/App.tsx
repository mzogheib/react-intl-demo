import React from 'react';
import {
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  useIntl,
} from 'react-intl';

import './App.css';

function App() {
  const { formatDate, formatNumber, formatPlural } = useIntl();

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
        <div>
          <FormattedPlural value={5} one="5 dog" other="5 dogs" />
        </div>

        <h1>useIntl hook</h1>
        <div>Today's date is {formatDate(Date.now())}</div>
        <div>This is a formatted number {formatNumber(10000.45)}</div>
        <div>
          This is a formatted currency{' '}
          {formatNumber(2000.32, { style: 'currency', currency: 'USD' })}
        </div>
        <div>{formatPlural(2, { type: 'cardinal' })}</div>
      </div>
    </div>
  );
}

export default App;
