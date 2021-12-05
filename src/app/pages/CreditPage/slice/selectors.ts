import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const selectSlice = (state: RootState) => state.creditpage || initialState

export const selectcreditadded = createSelector(
  [selectSlice],
  (state) => state.addeddata,
)

export const selectcreditextended = createSelector(
  [selectSlice],
  (state) => state.extendeddata,
)
