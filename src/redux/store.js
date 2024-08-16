import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";
import filtersReducer from "./filter/filtersSlice";  // Import the filters slice

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,  // Combine the filters reducer
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
