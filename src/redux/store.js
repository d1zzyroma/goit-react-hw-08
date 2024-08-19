import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import filtersReducer from "./filter/filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], 
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
  auth: persistReducer(authPersistConfig, authReducer), 
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
