// root saga: Điểm bắt đầu của saga
import { fork, take, call, put } from 'redux-saga/effects'
import * as actionsType from '../contants/task'
import { getList } from '../apis/task'
import { STATUS_CODE } from '../contants/index'
import { fecthListTaskSucces, fecthListTaskFalse} from '../actions/task'


function* watchFecthDataAction() {
    yield take(actionsType.FETCH_TASK)
    // ========= Blocking =========//
    const resp = yield call(getList);
    // ========= Blocking: Goi api thanh cong thi moi chay dong code o duoi =========//
    const { status, data } = resp;
    if (status === STATUS_CODE.SUSCCES) {
        // dispatch action fetchListTaskSuccess
        yield put(fecthListTaskSucces(data))
    } else {
        // dispatch action fetchListTaskFalse
        yield put(fecthListTaskFalse(data))
    }
}

function* watchCreateTaskAction() {
    console.log("Create Task Action")
}

function* rootSaga() {
    yield fork(watchFecthDataAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;    