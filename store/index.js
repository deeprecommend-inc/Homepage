import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  EnhancedStore,
} from '@reduxjs/toolkit'
import { blogDetailSlice } from './blogDetail'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    },
  }
}
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const rootReducer = combineReducers({
  blogDetail: blogDetailSlice.reducer,
})


const persistConfig = {
  key: 'p-next-test',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const useStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })
}