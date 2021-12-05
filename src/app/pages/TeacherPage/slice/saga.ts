import { call, put, takeLatest } from 'redux-saga/effects'
import { teacherAction as actions } from '.'
import { request } from 'utils/request2'

function* getTeacherData(): any {
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/activeschools`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    if (res) {
      yield put(actions.getSchoolListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(actions.getSchoolListError(a))
  }
}

export function* TeacherSaga() {
  yield takeLatest(actions.getSchoolList.type, getTeacherData)
}
