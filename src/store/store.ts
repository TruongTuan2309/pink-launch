import { errorLogin } from '@/store/middlewares/errorLogin'
import { fairLaunchPage } from '@/store/slices/fair-launch/fair-launch.slice'
import { loadingPage } from '@/store/slices/loading/loading.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const reducer = {
  loadingReducer: loadingPage.reducer,
  fairLaunchReducer: fairLaunchPage.reducer
}

export const store = configureStore({
  reducer: combineReducers<typeof reducer>(reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorLogin)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
