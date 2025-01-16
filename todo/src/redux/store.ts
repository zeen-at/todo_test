import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import todoReducer from "./slice/todoSlice"
import { persistReducer, persistStore } from 'redux-persist';
import { PersistPartial } from "redux-persist/es/persistReducer";


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})




export type RootState = ReturnType<typeof store.getState> & PersistPartial;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store)

export default store;
