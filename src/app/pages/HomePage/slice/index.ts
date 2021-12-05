import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import { ActiveSchool, HomePageState } from './types'
import homepageSaga from './saga'

export const initialState: HomePageState = {
  data: [],
  schoolListLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    getSchoolList(state, action: PayloadAction) {
      state.schoolListLoading = true
      state.error = null
    },
    getSchoolListSuccess(state, action: PayloadAction<ActiveSchool[]>) {
      state.data = action.payload
      state.schoolListLoading = false
      state.error = null
    },
    getSchoolListError(state, action: PayloadAction<any>) {
      state.schoolListLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: homepageActions } = slice

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: homepageSaga })
  return { actions: slice.actions }
}
