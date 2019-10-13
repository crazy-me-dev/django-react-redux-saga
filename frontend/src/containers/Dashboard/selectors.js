import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectDashboard = state => state.dashboard || initialState;

export const makeSelectDashboard = () =>
  createSelector(
    selectDashboard,
    dashboard => dashboard
  );

export const makeSelectJobItems = () =>
  createSelector(
    selectDashboard,
    dashboard => dashboard.JobItems
  );
