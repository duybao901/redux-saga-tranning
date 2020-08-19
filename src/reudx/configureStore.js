import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from '../reducer/index'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const middleware = [];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
// run function to create store
const configureStore = () => {
    var store = createStore(
        myReducer, 
        enhancer
    );
    return store;
}

export default configureStore;