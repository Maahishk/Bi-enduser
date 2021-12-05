import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from './index'

const makeSelector = (state: RootState) => state.premiumpage || initialState

export const selectpremiumload = createSelector(
  [makeSelector],
  (state) => state.data,
)
