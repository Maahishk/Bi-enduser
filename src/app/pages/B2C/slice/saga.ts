import { takeLatest, call, put } from 'redux-saga/effects'
import { b2cpageAction } from './index'
import { request } from 'utils/request2'

export function* getSubjectData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/activesubjects`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    if (res) {
      yield put(b2cpageAction.getSubjectListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(b2cpageAction.getSubjectListError(a))
  }
}
// Root saga
export default function* b2csaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(b2cpageAction.getSubjectList.type, getSubjectData)
}
