import { delay, put, takeLatest } from 'redux-saga/effects'
import { appActions as actions } from '.'
// import { selectLoginPayload } from './selectors';

function* authenticateUser() {
  // const loginPayload = yield select(selectLoginPayload);
  yield delay(6000)
  yield put(actions.loginSuccess({ authToken: 'ey1123213' }))
}
export function* appSaga() {
  yield takeLatest(actions.loginSubmit.type, authenticateUser)
}
