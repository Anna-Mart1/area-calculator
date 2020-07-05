import {combineReducers, createStore} from 'redux';
import {appReducer} from './AppReducer';

let reducers = combineReducers({
    app: appReducer,
})

const store = createStore(reducers);

export default store;
