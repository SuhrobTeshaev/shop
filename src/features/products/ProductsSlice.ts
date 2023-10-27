import { ThunkDispatch, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { shuffle } from "../../utils/common";
import { store } from "../store";

export interface Category {
  id: number;
  name: string;
}

export interface Products {
  name: string;
  id: number;
  price: number;
  // filtered:[],
  // related:[],
  category: Category;
}

export interface ProductsState {
  list: Products[];
  filtered: Products[];
  related: Products[];
  isLoading: boolean;
}
export const initialState: ProductsState = {
  list: [],
  filtered: [],
  related: [],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  // :{
  //     list: [] as Products[],
  // filtered: [] as Products[],
  // related: [] as Products[],
  // isLoading: false
  // },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      let list = state.list.filter(({ category: id }) => id === payload);
      state.related = shuffle(list);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { filterByPrice, getRelatedProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, any>;
