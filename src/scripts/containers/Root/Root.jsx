import React from 'react';
import PropTypes from 'prop-types';
import { Provider} from 'react-intl-redux';
import AppRouter from 'Containers/AppRouter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Component = ({ store, history }) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <AppRouter history={history} />
      </MuiThemeProvider>
    </Provider>
  );
};

Component.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

Component.defaultProps = {
  store: {},
  history: {},
};

export default Component;
