import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
// import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}