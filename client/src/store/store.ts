import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import productsReducer from './slices/mainSlice'
const rootReducer = combineReducers({productsReducer});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
