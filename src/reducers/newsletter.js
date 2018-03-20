import {
    SUBSCRIBE_INPUT,
    SUBSCRIBE_SUCCESS
} from "../actionTypes/newsletter";
export default (
    prevState = {
        data: {},
        subscribeSuccessMsg: ""
    }, action) => {
    switch (action.type) {
        case SUBSCRIBE_INPUT:
            return {
                ...prevState,
                data: { ...prevState.data, ...action.subscribeData }
            }
        case SUBSCRIBE_SUCCESS:
            console.log(action.success)
            return {
                ...prevState,
                subscribeSuccessMsg: action.success
            };
        default:
            return prevState;
    }
}