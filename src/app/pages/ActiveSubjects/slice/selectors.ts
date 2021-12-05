import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const makeselect = (state: RootState) => state.activesubjectpage || initialState

export const selectSlice = createSelector(
  [makeselect],
  (state) => state.classesdata,
)
