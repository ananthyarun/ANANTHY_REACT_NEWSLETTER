import {
    subscribeSuccess,
    subscribeFailure
} from "../actionCreators/newsletter";
import { put, takeLatest } from "redux-saga/effects";
import { SUBSCRIBE } from "../actionTypes/newsletter";
function* subscribe(action) {
    try {
        let url = "http://172.16.106.237:3000/users/api/subscribe";
        let success = yield fetch(url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.data)
        }).then(result => result.json());

        yield put(subscribeSuccess(success));
    }
    catch (error) {
        yield put(subscribeFailure(error));
    }
}
export function* getSubscribeWatcher() {
    yield takeLatest(SUBSCRIBE, subscribe)
}