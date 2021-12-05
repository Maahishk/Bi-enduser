import { takeLatest, call, put } from 'redux-saga/effects'
import { premiumAction as actions } from './index'
import { request } from 'utils/request2'

export function* getPremiumData(): any {
  try {
    const response = yield call(
      request,
      `http://localhost:3004/khaltitransaction`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      },
    )
    if (response) {
      yield put(actions.getPremiumListSuccess(response))
    }
  } catch (error: any) {
    const a: any = { error }
    // const errorObj = yield error.response.json()
    yield put(actions.getPremiumListError(a))
  }
}
// Root saga
export default function* premiumsaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(actions.getPremiumList.type, getPremiumData)
}
