// root saga: Điểm bắt đầu của saga
import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects'
import * as actionsType from '../contants/task'
import { getList } from '../apis/task'
import { STATUS_CODE } from '../contants/index'
import { fecthListTaskSucces, fecthListTaskFalse, filterTaskSucces } from '../actions/task'
import {globalShowLoading, globalHideLoading} from '../actions/ui'


function* watchFecthDataAction() {
    while (true) {
        yield take(actionsType.FETCH_TASK)
        yield put(globalShowLoading())
        // ========= Blocking =========//
        const resp = yield call(getList);
        // ========= Blocking: Goi api thanh cong thi moi chay dong code o duoi =========//

        yield delay(1500)
        const { status, data } = resp;
    
        if (status === STATUS_CODE.SUSCCES) {
            // dispatch action fetchListTaskSuccess
            yield put(fecthListTaskSucces(data))
        } else {
            // dispatch action fetchListTaskFalse
            yield put(fecthListTaskFalse(data))
        }
        yield put(globalHideLoading())
    }
}

function* filterTaskSaga(action){
    const { keyword } = action.payload;
    yield delay(500);
    const listTask = yield select(state => {
        return state.tasks.listTask
    });
    var filterTask = listTask.filter((task) => {
        return task.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })
    yield put(filterTaskSucces(filterTask));
}

function* rootSaga() {
    yield fork(watchFecthDataAction);
    yield takeLatest(actionsType.FILTER_TASK, filterTaskSaga);  
}

export default rootSaga;    