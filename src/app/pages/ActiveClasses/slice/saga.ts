import { takeLatest, call, put } from 'redux-saga/effects'
import { request } from 'utils/request2'
import { activeclassaction } from '.'

export function* getStudentData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/classstudent`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (res) {
      yield put(activeclassaction.getStudentListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    yield put(activeclassaction.getStudentListError(a))
  }
}

// Root saga
export default function* activeclasssaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(activeclassaction.getStudentList.type, getStudentData)
}
