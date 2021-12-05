import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { creditsaga } from './saga'
import { Credit, CreditState } from './types'

export const initialState: CreditState = {
  addeddata: [],
  extendeddata: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'creditpage',
  initialState,
  reducers: {
    getCreditAddList(state) {
      state.loading = true
      state.error = null
    },
    getCreditAddSuccess(state, action: PayloadAction<Credit[]>) {
      state.addeddata = action.payload
      state.loading = false
      state.error = null
    },
    getCreditAddError(state, action: PayloadAction<any>) {
      state.loading = false
      state.error = action.payload.error
    },
    getCreditExtendList(state) {
      state.loading = true
      state.error = null
    },
    getCreditExtendListSuccess(state, action: PayloadAction<Credit[]>) {
      state.extendeddata = action.payload
      state.loading = false
      state.error = null
    },
    getCreditExtendListError(state, action: PayloadAction<any>) {
      state.loading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: creditAction } = slice

export const useCreditSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: creditsaga })
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
