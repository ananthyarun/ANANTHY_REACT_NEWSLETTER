import {
  SUBSCRIBE,
  SUBSCRIBE_INPUT,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILURE
} from "../actionTypes/newsletter";
export function subscribe(data) {
  return {
    type: SUBSCRIBE,
    data
  };
}
export function subscribeInput(subscribeData) {
  return {
    type: SUBSCRIBE_INPUT,
    subscribeData
  };
}
export function subscribeSuccess(success) {
  return {
    type: SUBSCRIBE_SUCCESS,
    success
  };
}
export function subscribeFailure(error) {
  return {
    type: SUBSCRIBE_FAILURE,
    error
  };
}