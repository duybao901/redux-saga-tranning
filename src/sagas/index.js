// root saga: Điểm bắt đầu của saga
import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { hideModal } from '../actions/modal'
import { addTaskFalse, addTaskSucces, fecthListTaskFalse, fecthListTaskSucces, fetchTask, updateTaskFalse, updateTaskSucces } from '../actions/task'
import { globalHideLoading, globalShowLoading } from '../actions/ui'
import { addTask, getList, updateTaskAPI } from '../apis/task'
import { STATUS_CODE } from '../contants/index'
import * as actionsType from '../contants/task'


function* watchFecthDataAction() {
    while (true) {
        const action = yield take(actionsType.FETCH_TASK)
        // Khi nao thang actionsType.FETCH_TASK dc dispatch thi no se~ cho chay cac dong code o duoi nay
        // ========= Blocking =========//
        var { param } = action.payload;
        yield put(globalShowLoading())
        // ========= Blocking =========//
        const resp = yield call(getList, param); // call(this, param1, param2, ....)
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
    }
}

function* filterTaskSaga(action) {
    yield delay(700);
    const { keyword } = action.payload;
    yield put(fetchTask({
        q: keyword
    }));

}

function* addTaskSaga(action) {
    const { title, description } = action.payload;
    yield put(globalShowLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status: 0
    });
    const { status, data } = resp;

    if (status === STATUS_CODE.CREATE) {
        yield put(hideModal())
        yield delay(1000);
        yield put(globalHideLoading())
        yield put(addTaskSucces(data))

    } else {
        yield put(addTaskFalse(data))
    }
    delay(500);
    yield put(globalHideLoading())

}

function* updateTaskSaga(action) {
    const { title, description, status } = action.payload;
    const taskEditing = yield select(state => state.tasks.taskEditing)
    yield put(globalShowLoading());
    const resp = yield call(updateTaskAPI, {
        title,
        description,
        status
    }, taskEditing.id);
    const { data } = resp;
    if (resp.status === STATUS_CODE.SUSCCES) {
        yield put(hideModal())
        yield delay(700);
        yield put(globalHideLoading())
        yield put(updateTaskSucces(data))

    } else {
        yield put(updateTaskFalse(data))
    }
    delay(500);
    yield put(globalHideLoading())
}

function* rootSaga() {
    yield fork(watchFecthDataAction);
    yield takeEvery(actionsType.ADD_TASK, addTaskSaga);
    yield takeLatest(actionsType.FILTER_TASK, filterTaskSaga);
    yield takeLatest(actionsType.UPDATE_TASK, updateTaskSaga);
}

export default rootSaga;    