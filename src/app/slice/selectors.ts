import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const selectDomain = (state: RootState) => state.app || initialState

export const selectLoginPayload = createSelector(
  [selectDomain],
  (appState) => appState.loginPayload,
)

export const selectAuthToken = createSelector(
  [selectDomain],
  (appState) => appState.authToken,
)
