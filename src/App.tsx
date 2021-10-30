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
          <FormattedMessage id="page_general.date" />{' '}
          <FormattedDate value={Date.now()} />
        </div>
        <div>
          <FormattedMessage id="ev.Number *" />{' '}
          <FormattedNumber value={10000.45} />
        </div>
        <div>
          <FormattedMessage id="general.currency" />{' '}
          <FormattedNumber value={2000.32} style={`currency`} currency="JPY" />
        </div>
        <div>
          <FormattedMessage id="login.heading" />{' '}
          <FormattedMessage id="login.register-alt" />
        </div>

        <h1>useIntl hook</h1>
        <div>
          {formatMessage({ id: 'page_general.date' })} {formatDate(Date.now())}
        </div>
        <div>
          {formatMessage({ id: 'ev.Number *' })} {formatNumber(10000.45)}
        </div>
        <div>
          {formatMessage({ id: 'general.currency' })}{' '}
          {formatNumber(2000.32, { style: 'currency', currency: 'JPY' })}
        </div>
        <div>
          {formatMessage({ id: 'login.heading' })}{' '}
          {formatMessage({ id: 'login.register-alt' })}
        </div>
      </div>
    </div>
  );
}

export default App;
