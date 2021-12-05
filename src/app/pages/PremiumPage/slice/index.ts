import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { useInjectSaga } from 'utils/redux-injectors'
import { PremiumState } from './types'
import premiumsaga from './saga'

export const initialState: PremiumState = {
  data: [],
  listLoading: false,
  error: null,
}

const slice = createSlice({
  name: 'premiumpage',
  initialState,
  reducers: {
    getPremiumList(state, action: PayloadAction) {
      state.listLoading = true
      state.error = null
    },
    getPremiumListSuccess(state, action: PayloadAction<[]>) {
      state.data = action.payload
      state.listLoading = false
      state.error = null
    },
    getPremiumListError(state, action: PayloadAction<PremiumState>) {
      state.listLoading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: premiumAction } = slice

export const usePremiumSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: premiumsaga })
  return { actions: slice.actions }
}
