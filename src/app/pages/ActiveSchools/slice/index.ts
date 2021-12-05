import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import { ActiveClasses, ActiveSchoolState, ActiveSubjectData } from './types'
import activeschoolsaga from './saga'

export const initialState: ActiveSchoolState = {
  subjectdata: [],
  classesdata: [],
  subjectsListLoading: false,
  classLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'activeschoolpage',
  initialState,
  reducers: {
    getSubjectList(state) {
      state.subjectsListLoading = true
      state.error = null
    },
    getSubjectListSuccess(state, action: PayloadAction<ActiveSubjectData[]>) {
      state.subjectdata = action.payload
      state.subjectsListLoading = false
      state.error = null
    },
    getSubjectListError(state, action: PayloadAction<ActiveSchoolState>) {
      state.subjectsListLoading = false
      state.error = action.payload.error
    },
    getClassesList(state) {
      state.classLoading = true
      state.error = null
    },
    getClassesListSuccess(state, action: PayloadAction<ActiveClasses[]>) {
      state.classesdata = action.payload
      state.classLoading = false
      state.error = null
    },
    getClassesListError(state, action: PayloadAction<ActiveSchoolState>) {
      state.classLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: activeschoolaction } = slice

export const useActiveSchoolPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: activeschoolsaga })
  return { actions: slice.actions }
}
