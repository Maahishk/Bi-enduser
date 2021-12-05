import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import { StudentState } from './types'
import studentsaga from './saga'

export const initialState: StudentState = {
  mostactivedata: [],
  leastactivedata: [],
  activeListLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'studentpage',
  initialState,
  reducers: {
    getMostActiveList(state, action: PayloadAction) {
      state.activeListLoading = true
      state.error = null
    },
    getMostActiveListSuccess(state, action: PayloadAction<[]>) {
      state.mostactivedata = action.payload
      state.activeListLoading = false
      state.error = null
    },
    getMostActiveListError(state, action: PayloadAction<any>) {
      state.activeListLoading = false
      state.error = action.payload.error
    },
    getLeastActiveList(state, action: PayloadAction) {
      state.activeListLoading = true
      state.error = null
    },
    getLeastActiveListSuccess(state, action: PayloadAction<[]>) {
      state.leastactivedata = action.payload
      state.activeListLoading = false
      state.error = null
    },
    getLeastActiveListError(state, action: PayloadAction<any>) {
      state.activeListLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: studentPageAction } = slice

export const useStudentsPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: studentsaga })
  return { actions: slice.actions }
}
