import { messageReducer } from "./messagesSlice";

import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({
  reducer: {
    messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
