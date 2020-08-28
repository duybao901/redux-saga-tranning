// root saga: Điểm bắt đầu của saga
import { call, delay, fork, put, take, takeLatest } from 'redux-saga/effects'
import { fecthListTaskFalse, fecthListTaskSucces, fetchTask } from '../actions/task'
import { globalHideLoading, globalShowLoading } from '../actions/ui'
import { getList } from '../apis/task'
import { STATUS_CODE } from '../contants/index'
import * as actionsType from '../contants/task'


function* watchFecthDataAction() {
    // while (true) {
         const action = yield take(actionsType.FETCH_TASK)
         var { param } = action.payload;
        yield put(globalShowLoading())
        // ========= Blocking =========//
        const resp = yield call(getList,param); // call(this, param1, param2, ....)
        // ========= Blocking: Goi api thanh cong thi moi chay dong code o duoi =========//

        yield delay(1000)
        const { status, data } = resp;
    
        if (status === STATUS_CODE.SUSCCES) {
            // dispatch action fetchListTaskSuccess
            yield put(fecthListTaskSucces(data))
        } else {
            // dispatch action fetchListTaskFalse
            yield put(fecthListTaskFalse(data))
        }
        yield put(globalHideLoading())
    // }
}

function* filterTaskSaga(action) {
    yield delay(700);
    const { keyword } = action.payload;
    yield put(fetchTask({
        q: keyword
    }));

}

function* rootSaga() {
    yield fork(watchFecthDataAction);
    yield takeLatest(actionsType.FILTER_TASK, filterTaskSaga);  
}

export default rootSaga;    