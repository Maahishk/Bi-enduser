/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import { createReducer } from './reducers'

export function configureAppStore(initialState = {}, history?: any) {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[]

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers,
  })

  return store
}
