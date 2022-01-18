import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./slices/mainSlice";
import productReducer from "./slices/fetchProductSlice";
import compareReducer from "./slices/compareSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  productsReducer,
  compareReducer,
  productReducer,
  authReducer,
});
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
