import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './weatherSlice';
import searchModal from './searchModal';

const store = configureStore({
    reducer : {
        weatherReducer,
        searchModal,
    }
});
export default store;