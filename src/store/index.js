import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import { busketReducer } from "./busketReducer";
import { userFromServerReducer} from "./userFromServerReducer"
import thunk from "redux-thunk";


function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
    busket: busketReducer,
    userServer: userFromServerReducer
});

const store = createStore(rootReducer, loadFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;