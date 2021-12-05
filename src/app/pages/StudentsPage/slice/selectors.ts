import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const makeSelect = (state: RootState) => state.studentpage || initialState

export const selectmostactiveSlice = createSelector(
  [makeSelect],
  (state) => state.mostactivedata,
)

export const selectleastactiveSlice = createSelector(
  [makeSelect],
  (state) => state.leastactivedata,
)
