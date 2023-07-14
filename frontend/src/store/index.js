import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { pathReducer } from "./reducers/pathReducer";

const rootReducer = combineReducers({
  user: userReducer,
  path: pathReducer,
});

const rootState = createStore(rootReducer);

export default rootState;
