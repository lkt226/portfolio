import { configureStore } from '@reduxjs/toolkit'

import { toastSlice } from '@/features/toast/toastSlice'

export const store = configureStore({
  reducer: {
    toast: toastSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch