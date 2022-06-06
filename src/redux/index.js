import { combineReducers, legacy_createStore } from "redux";
import userReducer from "./reducers/user";

const allReducers = combineReducers({
    user: userReducer
});

const store = legacy_createStore(allReducers);

export default store;
