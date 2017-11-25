import { createStore, combineReducers } from 'redux';
import rootReducer from 'Reducers';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { intlReducer, updateIntl } from 'react-intl-redux';
import { pick } from 'lodash';
import enhancers, { runSagas } from './enhancers';

const appReducer = combineReducers({
  root: rootReducer,
  form: formReducer,
  intl: intlReducer,
  router: routerReducer,
})

const mainReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = pick(state, ['intl']);
  }
  return appReducer(state, action)
}

export default function configureStore(initialState, history) {
  const store = createStore(
    mainReducer,
    initialState,
    enhancers(history)
  );

  runSagas();

  return store;
};
