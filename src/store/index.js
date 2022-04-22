import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { busketReducer } from "./busketReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    busket: busketReducer
});

export const store = createStore(rootReducer, composeWithDevTools());