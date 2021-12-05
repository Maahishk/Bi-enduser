import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const makeSelect = (state: RootState) => state.activeschoolpage || initialState

export const selectsubjectSlice = createSelector(
  [makeSelect],
  (state) => state.subjectdata,
)
export const selectclassSlice = createSelector(
  [makeSelect],
  (state) => state.classesdata,
)
