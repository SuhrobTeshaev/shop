import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constant";


    
export interface Products {
    name:string,
    id:number
}

export interface ProductsState {
    products:Products[]
}
const initialState: ProductsState = {
    products:[]
}


export const getProducts = createAsyncThunk('categories/getCategories',
async (arg,thunkAPI)=>{
    try{
        const res = await axios(`${BASE_URL}/categories`);
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
    reducers:{},    
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading=true;   
        });
        builder.addCase(getProducts.fulfilled,(state,{payload})=>{
            state.list=payload;
            state.isLoading=false;  
        });
        builder.addCase(getProducts.rejected,(state)=>{
            state.isLoading=false;  
        });
    }
 })

 export default ProductsSlice.reducer;