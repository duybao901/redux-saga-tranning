import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import myReducer from '../reducer/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];
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
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;