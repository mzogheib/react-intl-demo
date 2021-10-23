import React from 'react';
import {
  FormattedDate,
  FormattedNumber,
  FormattedMessage,
  useIntl,
} from 'react-intl';

function App() {
  const { formatDate, formatNumber, formatMessage } = useIntl();

  return (
    <div className="App">
      <div>
        <h1>Components</h1>
        <div>
          <FormattedMessage id="date" /> <FormattedDate value={Date.now()} />
        </div>
        <div>
          <FormattedMessage id="number" /> <FormattedNumber value={10000.45} />
        </div>
        <div>
          <FormattedMessage id="currency" />{' '}
          <FormattedNumber value={2000.32} style={`currency`} currency="JPY" />
        </div>
        <div>
          <FormattedMessage id="animal" /> <FormattedMessage id="dog" />
        </div>

        <h1>useIntl hook</h1>
        <div>
          {formatMessage({ id: 'date' })} {formatDate(Date.now())}
        </div>
        <div>
          {formatMessage({ id: 'number' })} {formatNumber(10000.45)}
        </div>
        <div>
          {formatMessage({ id: 'currency' })}{' '}
          {formatNumber(2000.32, { style: 'currency', currency: 'JPY' })}
        </div>
        <div>
          {formatMessage({ id: 'animal' })} {formatMessage({ id: 'dog' })}
        </div>
      </div>
    </div>
  );
}

export default App;
