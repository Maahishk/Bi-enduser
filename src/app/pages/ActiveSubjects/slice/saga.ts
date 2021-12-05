import { takeLatest, call, put } from 'redux-saga/effects'
import { activesubjectaction } from './index'
import { request } from 'utils/request2'

export function* getClassData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/scienceclasses`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (res) {
      yield put(activesubjectaction.getClassesListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    yield put(activesubjectaction.getClassesListError(a))
  }
}

// Root saga
export default function* activesubjectsaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(activesubjectaction.getClassesList.type, getClassData)
}
