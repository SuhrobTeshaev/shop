import {  configureStore } from "@reduxjs/toolkit"
import CategoriesSlice from "./categories/CategoriesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import ProductsSlice from "./products/ProductsSlice"



export const store = configureStore({
    reducer:{
        categories:CategoriesSlice,
        products:ProductsSlice
    },
    // devtools:true,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
