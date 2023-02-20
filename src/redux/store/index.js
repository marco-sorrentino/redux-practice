import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";

// Inizializzo lo store, ossia il cervello che fa girare la macchina
const store = configureStore({
  reducer: mainReducer,
});

export default store;
