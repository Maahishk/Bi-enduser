import { takeLatest, call, put } from 'redux-saga/effects'
import { activeschoolaction } from './index'
import { request } from 'utils/request2'

export function* getSubjectData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/adhyayanschoolsubjects`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (res) {
      yield put(activeschoolaction.getSubjectListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    yield put(activeschoolaction.getSubjectListError(a))
  }
}

export function* getClassData(): any {
  // const token = yield select(makeSelectToken())
  try {
    const res: any = yield call<any>(
      request,
      `http://localhost:3004/adhyayanschoolclasses`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (res) {
      yield put(activeschoolaction.getClassesListSuccess(res))
    }
  } catch (error: any) {
    const a: any = { error }
    yield put(activeschoolaction.getClassesListError(a))
  }
}

// Root saga
export default function* activeschoolsaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(activeschoolaction.getSubjectList.type, getSubjectData)
  yield takeLatest(activeschoolaction.getClassesList.type, getClassData)
}
