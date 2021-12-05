import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { TeacherSaga } from './saga'
import { TeacherState } from './types'

export const initialState: TeacherState = {
  data: [],
  teacherListLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'teacherpage',
  initialState,
  reducers: {
    getSchoolList(state) {
      state.teacherListLoading = true
      state.error = null
    },
    getSchoolListSuccess(state, action: PayloadAction<[]>) {
      state.data = action.payload
      state.teacherListLoading = false
      state.error = null
    },
    getSchoolListError(state, action: PayloadAction<any>) {
      state.teacherListLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: teacherAction } = slice

export const useTeacherSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: TeacherSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useYSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
