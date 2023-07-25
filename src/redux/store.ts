import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import authenticationSlice from './authenticationSlice'
import themeSlice from './themeSlice'
import postsSlice from './postsSlice'
import messageSlice from './messageSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['authentication', 'theme']
}

const rootReducer = combineReducers({
  authentication: authenticationSlice,
  theme: themeSlice,
  posts: postsSlice,
  messages: messageSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
})

export { store }

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
