import { call, put, takeLatest } from 'redux-saga/effects'
import { creditAction as actions } from '.'
import { request } from 'utils/request2'

function* getCreditData(): any {
  try {
    const res1: any = yield call<any>(
      request,
      `http://localhost:3004/mostcreditadded`,
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
      `http://localhost:3004/mostcreditexpended`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    if (res1) {
      yield put(actions.getCreditAddSuccess(res1))
    }
    if (res2) {
      yield put(actions.getCreditExtendListSuccess(res2))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(actions.getCreditAddError(a))
    yield put(actions.getCreditExtendListError(a))
  }
}

export function* creditsaga() {
  yield takeLatest(actions.getCreditAddList.type, getCreditData)
  yield takeLatest(actions.getCreditExtendList.type, getCreditData)
}
