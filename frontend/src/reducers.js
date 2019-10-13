import { combineReducers } from "redux";
import dashboardReducer from "./containers/Dashboard/reducer";

export default function createReducer(injectedReducers = {}) {
  const appReducer = combineReducers({
    dashboard: dashboardReducer,
    ...injectedReducers
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  return rootReducer;
}
