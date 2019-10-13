import {
  TOGGLE_COLLAPSE,
  FETCH_JOBITEMS,
  FETCH_JOBITEMS_FAIL,
  FETCH_JOBITEMS_SUCCESS,
  DELETE_JOBITEMS,
  DELETE_JOBITEMSSUCCESS,
  CREATE_JOBITEMS,
  CREATE_JOBITEMSSUCCESS
} from "./constants";

export function toggleCollapsed() {
  return {
    type: TOGGLE_COLLAPSE
  };
}

export function fetchJobItems() {
  return {
    type: FETCH_JOBITEMS
  };
}

export function fetchJobItemsFail() {
  return {
    type: FETCH_JOBITEMS_FAIL
  };
}

export function fetchJobItemsSuccess(Data) {
  return {
    type: FETCH_JOBITEMS_SUCCESS,
    data: Data
  };
}

export function deleteJobItem(id) {
  return {
    type: DELETE_JOBITEMS,
    id
  };
}

export function deleteJobItemSuccess(Data) {
  return {
    type: DELETE_JOBITEMSSUCCESS,
    data: Data
  };
}

export function createJobItem(data) {
  return {
    type: CREATE_JOBITEMS,
    data
  };
}

export function createJobItemSuccess(Data) {
  return {
    type: CREATE_JOBITEMSSUCCESS,
    data: Data
  };
}
