import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import activeclasssaga from './saga'
import { ActiveClassState, StudentData } from './types'

export const initialState: ActiveClassState = {
  studentdata: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'activeclasspage',
  initialState,
  reducers: {
    getStudentList(state) {
      state.loading = true
      state.error = null
    },
    getStudentListSuccess(state, action: PayloadAction<StudentData[]>) {
      state.studentdata = action.payload
      state.loading = false
      state.error = null
    },
    getStudentListError(state, action: PayloadAction<ActiveClassState>) {
      state.loading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: activeclassaction } = slice

export const useActiveClassPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: activeclasssaga })
  return { actions: slice.actions }
}
