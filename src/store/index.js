import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import { busketReducer } from "./busketReducer";
import { userFromServerReducer} from "./userFromServerReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    auth: authReducer,
    busket: busketReducer,
    userServer: userFromServerReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
export default store;