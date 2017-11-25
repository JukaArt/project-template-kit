import { createLogger } from 'redux-logger';

const composeMiddlewares = (middlewares, isDev) => {
  const loggerMiddleware = (isDev === 'test') ? createLogger() : undefined;

  const predicate = item => item;
  const potentionalMiddlewares = [
    loggerMiddleware,
    ...middlewares,
  ];

  return potentionalMiddlewares.filter(predicate);
};

export default composeMiddlewares;
