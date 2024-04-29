import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { authState } from "../slices";


const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: authState.reducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer) ;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:false ,
        })
})


export const persister  = persistStore(store)