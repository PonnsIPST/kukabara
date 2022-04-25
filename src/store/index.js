import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { busketReducer } from "./busketReducer";
import { userFromServerReducer} from "./userFromServerReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    busket: busketReducer,
    userServer: userFromServerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));