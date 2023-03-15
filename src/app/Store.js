import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinsReducer, rootSaga } from "../features/CryptoSlice/cryptoSlice";



const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
    
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };







