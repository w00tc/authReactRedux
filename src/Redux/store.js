import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e);
    }
}
function loadFromLocalStorage(state) {
    try{
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
    }
}

let reducers = combineReducers({
    auth: authReducer
});

const persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, persistedState,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;