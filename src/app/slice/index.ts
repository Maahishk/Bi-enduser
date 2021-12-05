import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { appSaga } from './saga'
import { AppState, LoginRequest, LoginResponse } from './types'

export const initialState: AppState = {
  authToken: null,
  loading: true,
  loginPayload: null,
  error: null,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginSubmit(state, action: PayloadAction<LoginRequest>) {
      state.loading = true
      state.loginPayload = action.payload
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.loading = false
      state.authToken = action.payload.authToken
      state.error = null
    },
    loginError(state, action: PayloadAction<any>) {
      state.loading = false
      state.error = action.payload.error
    },
  },
})

export const { actions: appActions, reducer } = slice

export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: appSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
