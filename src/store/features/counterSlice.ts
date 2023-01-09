import { Action, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface InitalState {
  counter: number;
  status: string;
  response: string;
}

const initialState: InitalState = {
  counter: 0,
  status: "",
  response: "",
};

export const demoRequest = createAsyncThunk(
  "get/json-palceholder",
  async (dispatch, getState) => {
    return await fetch("https://cresequity-backend.onrender.com/api/tags").then(
      (res) => res.json()
    );
  },{}
);

const counterSlice = createSlice({
  initialState: initialState,
  name: "counterSlice",
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(demoRequest.pending, (state, actions) => {
      state.status = "pending";
    });
    builder.addCase(demoRequest.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.response = action.payload;
    });
    builder.addCase(demoRequest.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
