import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import { B2CData, B2CState } from './types'
import b2csaga from './saga'

export const initialState: B2CState = {
  b2cdata: [
    {
      id: 0,
      active_subject_name: 'name',
      total_students: 0,
      total_incomplete_videos: 0,
      total_videos_completed: 0,
      average_mastery: '0.00%',
    },
  ],
  subjectsListLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'b2cpage',
  initialState,
  reducers: {
    getSubjectList(state) {
      state.subjectsListLoading = true
      state.error = null
    },
    getSubjectListSuccess(state, action: PayloadAction<B2CData[]>) {
      state.b2cdata = action.payload
      state.subjectsListLoading = false
      state.error = null
    },
    getSubjectListError(state, action: PayloadAction<B2CState>) {
      state.subjectsListLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: b2cpageAction } = slice

export const useB2CPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: b2csaga })
  return { actions: slice.actions }
}
