import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
// import { phoneReducer, cntReducer } from './Reducers';
import * as reducers from './Reducers';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    ...reducers,
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
