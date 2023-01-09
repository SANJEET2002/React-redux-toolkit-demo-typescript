import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { testRTkQuery } from "./features/rtkQuery";

export const store = configureStore({
  reducer: {
    counterState: counterSlice,
    [testRTkQuery.reducerPath]: testRTkQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testRTkQuery.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
