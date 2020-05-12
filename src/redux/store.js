import {applyMiddleware, combineReducers, createStore} from 'redux';
import mainReducer from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    mainReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
