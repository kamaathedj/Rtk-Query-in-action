import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {jokesApi} from '../features/mdata/api-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jokesApi.reducerPath] : jokesApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(jokesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
