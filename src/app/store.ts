import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {jokesApi} from '../features/mdata/api-slice'
import {prisonerSlice} from '../features/prisoner/prisoner-api-slice'
import {userApiSlice} from '../features/user-api/user-api-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jokesApi.reducerPath] : jokesApi.reducer,
    [prisonerSlice.reducerPath]: prisonerSlice.reducer,
    [userApiSlice.reducerPath]:userApiSlice.reducer


  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(jokesApi.middleware,prisonerSlice.middleware,userApiSlice.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
