import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import activesubjectsaga from './saga'
import { ActiveClasses, ActiveSubjectState } from './types'

export const initialState: ActiveSubjectState = {
  classesdata: [],
  classLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'activesubjectpage',
  initialState,
  reducers: {
    getClassesList(state) {
      state.classLoading = true
      state.error = null
    },
    getClassesListSuccess(state, action: PayloadAction<ActiveClasses[]>) {
      state.classesdata = action.payload
      state.classLoading = false
      state.error = null
    },
    getClassesListError(state, action: PayloadAction<ActiveSubjectState>) {
      state.classLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: activesubjectaction } = slice

export const useActiveSubjectPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: activesubjectsaga })
  return { actions: slice.actions }
}
