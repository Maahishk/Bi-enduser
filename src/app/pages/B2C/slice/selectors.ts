import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const makeSelect = (state: RootState) => state.b2cpage || initialState

export const selectSlice = createSelector(
  [makeSelect],
  (state) => state.b2cdata,
)
