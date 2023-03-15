import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { put, call, takeLatest } from "redux-saga/effects";



const initialState = {
  cryptoCoins: [],
  error: "",
  isLoading: false
};


export function* fetchCryptoCoins(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.coincap.io/v2/assets/?limit=${action.payload * 50}`
    );
    yield put({ type: "cryptoCoins/fetchCryptoCoinsSuccess", payload: response.data.data });
  } catch (error) {
    yield put({ type: "cryptoCoins/fetchCryptoCoinsFailure", payload: error.message });
  }
}

const cryptoSlice = createSlice({
  name: "cryptoCoins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("cryptoCoins/fetchCryptoCoinsPending", (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase("cryptoCoins/fetchCryptoCoinsSuccess", (state, action) => {
      state.cryptoCoins = action.payload;
      state.isLoading = false;
    });
    builder.addCase("cryptoCoins/fetchCryptoCoinsFailure", (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { reducer: cryptoCoinsReducer } = cryptoSlice;


export function* rootSaga() {
  yield takeLatest("cryptoCoins/fetchCryptoCoins", fetchCryptoCoins);
}


