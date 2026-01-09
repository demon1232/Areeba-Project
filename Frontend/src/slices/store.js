import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import signupreducer from "./signup.slice";
import  loginreducer from "./login.slice";
import postAdreducer from "./postAd.slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import updatedAd from "./editinfo.slice"

const loginPersistConfig = {
    key: "login",
    storage,
};

 const signupPersistConfig = {
    key: "signup" ,
    storage,
    
 };


const store = configureStore({
    reducer:{
        Signup :persistReducer(signupPersistConfig,signupreducer),
        Login :persistReducer(loginPersistConfig,loginreducer),
        Post : postAdreducer,
        UpdatedAd : updatedAd
    }
});


// Create persistor instance
export const persistor = persistStore(store);

// Export both store and persistor
export default store;
