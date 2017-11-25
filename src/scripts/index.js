import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'Store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from 'Containers/Root';
import 'Styles/common.js';

injectTapEventPlugin();

const history = createHistory();
const store = configureStore(undefined, history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('Containers/Root', () => { render(Root); });
}
