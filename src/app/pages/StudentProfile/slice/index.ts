import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { useStuentProfileSaga } from './saga'
import { EnrolledClasses, StudentProfileState } from './types'

export const initialState: StudentProfileState = {
  classdata: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'studentprofilepage',
  initialState,
  reducers: {
    getEnrolledClassList(state) {
      state.loading = true
      state.error = null
    },
    getEnrolledClassListSuccess(
      state,
      action: PayloadAction<EnrolledClasses[]>,
    ) {
      state.classdata = action.payload
      state.loading = false
      state.error = null
    },
    getEnrolledClassListError(
      state,
      action: PayloadAction<StudentProfileState>,
    ) {
      state.loading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: studentprofileaction } = slice

export const useStudentProfileSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: useStuentProfileSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
