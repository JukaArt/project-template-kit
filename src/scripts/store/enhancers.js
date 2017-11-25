import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from 'Sagas';
import devModeCompose from 'Store/dev';
import composeMiddlewares from 'Store/composeMiddlewares';

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = (isDev) ? devModeCompose : compose;

const enhancers = history => {
  const middlewares = composeMiddlewares([
    routerMiddleware(history),
    sagaMiddleware,
  ], isDev);

  return composeEnhancers(
    applyMiddleware(...middlewares)
  );
}

export const runSagas = () => {
  sagaMiddleware.run(rootSaga);

  return sagaMiddleware;
};

export default history => {
  return enhancers(history);
};
