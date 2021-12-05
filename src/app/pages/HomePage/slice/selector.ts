import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'types'
import { initialState } from './index'

const makeSelector = (state: RootState) => state.homepage || initialState

export const selectHomePageload = createSelector(
  [makeSelector],
  (homePageState) => homePageState.data,
)
