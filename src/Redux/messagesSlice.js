import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://sara7aiti.onrender.com/api/v1/message";

// To get all user messages
export let getMessages = createAsyncThunk("message/getMessages", async () => {
  return await axios.get(api, {
    headers: {
      token: localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
  });
});

// to add message
export let postMessage = createAsyncThunk(
  "message/postMessage",
  async ({ messageContent, receivedId }) => {
    const res = await axios.post(api, { messageContent, receivedId });
    return res.data;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: { message: [], setMessage: null },

  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.message = action.payload.data.allMessages;
    });

    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.setMessage = action.payload;
    });
  },
});

export let messageReducer = messageSlice.reducer;
