import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./categories/CategoriesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ProductsSlice from "./products/ProductsSlice";
import { apiSlice } from "./api/apiSlice";
import UserSlice from "./user/UserSlice";

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    products: ProductsSlice,
    user: UserSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  // devtools:true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
// export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
