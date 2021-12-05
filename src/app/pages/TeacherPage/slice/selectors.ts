import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from '.'

const selectSlice = (state: RootState) => state.teacherpage || initialState

export const selectTeacherPage = createSelector(
  [selectSlice],
  (state) => state.data,
)
