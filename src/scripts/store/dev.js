import { composeWithDevTools } from 'redux-devtools-extension';

const devModeCompose = (() => {
  const settings = {
    maxAge: 30,
  };

  return composeWithDevTools(settings);
})();

export default devModeCompose;
