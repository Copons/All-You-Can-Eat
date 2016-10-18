import { createStore, compose } from 'redux';
import reducers from '../reducers';

const configureStore = () => {
  const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducers, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};

export default configureStore();
