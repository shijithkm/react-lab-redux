import { createStore,applyMiddleware,compose} from 'redux';
import rootReducers from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialStore){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // add support for redux dev tools
  return createStore(
    rootReducers,
    initialStore,
    applyMiddleware(reduxImmutableStateInvariant())
    );
}