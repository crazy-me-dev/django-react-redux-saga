import produce from "immer";
import {
  TOGGLE_COLLAPSE,
  FETCH_JOBITEMS,
  FETCH_JOBITEMS_FAIL,
  FETCH_JOBITEMS_SUCCESS,
  DELETE_JOBITEMSSUCCESS,
  CREATE_JOBITEMSSUCCESS
} from "./constants";

export const initialState = {
  collapsed: false,
  JobItems: null
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_COLLAPSE:
        draft.collapsed = !draft.collapsed;
        break;
      case FETCH_JOBITEMS_SUCCESS:
        draft.JobItems = action.data;
        break;
      case FETCH_JOBITEMS_FAIL:
        draft.collapsed = null;
        break;

      case DELETE_JOBITEMSSUCCESS:
        draft.JobItems = draft.JobItems.filter(
          item => item.jobItemId !== action.data
        );
        break;

      case CREATE_JOBITEMSSUCCESS:
        draft.JobItems =
          draft.JobItems !== null ? [action.data, ...draft.JobItems] : null;
        break;
    }
  });
export default dashboardReducer;
