import { call, takeLatest, put } from 'redux-saga/effects'
import { request } from 'utils/request2'
import { studentprofileaction } from './index'

export function* getEnrolledClass(): any {
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/enrolledclasses`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (res) {
      yield put(studentprofileaction.getEnrolledClassListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    yield put(studentprofileaction.getEnrolledClassListError(a))
  }
}

export function* useStuentProfileSaga() {
  yield takeLatest(
    studentprofileaction.getEnrolledClassList.type,
    getEnrolledClass,
  )
}
