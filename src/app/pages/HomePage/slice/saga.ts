import { takeLatest, call, put } from 'redux-saga/effects'
import { homepageActions } from './index'
import { request } from 'utils/request2'

export function* getSchoolListData(): any {
  try {
    const response = yield call(
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
    if (response) {
      yield put(homepageActions.getSchoolListSuccess(response))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(homepageActions.getSchoolListError(a))
  }
}
// Root saga
export default function* homepageSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(homepageActions.getSchoolList.type, getSchoolListData)
}
