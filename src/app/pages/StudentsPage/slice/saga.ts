import { takeLatest, call, put } from 'redux-saga/effects'
import { studentPageAction } from './index'
import { request } from 'utils/request2'

export function* getActiveStudentData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res1: any = yield call<any>(
      request,
      `http://localhost:3004/mostactivestudents`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    const res2: any = yield call<any>(
      request,
      `http://localhost:3004/leastactivestudents`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    if (res1) {
      yield put(studentPageAction.getMostActiveListSuccess(res1))
    }
    if (res2) {
      yield put(studentPageAction.getLeastActiveListSuccess(res2))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(studentPageAction.getMostActiveListError(a))
    yield put(studentPageAction.getLeastActiveListError(a))
  }
}
// Root saga
export default function* studentsaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(
    studentPageAction.getMostActiveList.type,
    getActiveStudentData,
  )
  yield takeLatest(
    studentPageAction.getLeastActiveList.type,
    getActiveStudentData,
  )
}
