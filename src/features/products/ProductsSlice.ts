import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { shuffle } from "../../utils/common";


    
export interface Products {
    name:string,
    id:number
}

export interface ProductsState {
    products:Products[]
}
export const initialState: ProductsState = {
    products:[]
}


export const getProducts = createAsyncThunk('categories/getCategories',
async (_,thunkAPI)=>{
    try{
        const res = await axios(`${BASE_URL}/products`);
        return res.data;    
    } catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

 const ProductsSlice = createSlice({
    name:'products',
    initialState:{
        list:[],
        filtered:[],
        related:[],
        isLoading:false
    },
    reducers:{
        filterByPrice: (state,{payload})=>{
            state.filtered = state.list.filter(({price})=>price < payload);
        },
        getRelatedProducts:(state,{payload})=>{
            let list = state.list.filter(({category:{id}})=> id === payload);
            state.related = shuffle(list);
        },
    },    
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading = true;   
        });
        builder.addCase(getProducts.fulfilled,(state,{payload})=>{
            state.list = payload;
            state.isLoading = false;  
        });
        builder.addCase(getProducts.rejected,(state)=>{
            state.isLoading = false;  
        });
    }
 })
 export const {filterByPrice,getRelatedProducts} = ProductsSlice.actions
 export default ProductsSlice.reducer;