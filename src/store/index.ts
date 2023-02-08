import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedCreateStore = compose(
// const composedCreateStore = composeEnhancers(
    applyMiddleware(thunk)
)(createStore);

function configureStore(initState = {}){
  const store = composedCreateStore(reducers, initState);
  return store;
}

const store = configureStore();

export default store;
