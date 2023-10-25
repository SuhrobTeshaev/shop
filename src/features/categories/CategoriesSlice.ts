import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constant";


    
export interface Categories {
    name:string,
    id:number,
    devtools:boolean,

}

export interface CategoriesState {
    categories:Categories[]
}
 export const initialState: CategoriesState = {
    categories:[],

}


export const getCategories = createAsyncThunk('categories/getCategories',
async (arg,thunkAPI)=>{
    try{
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;    
    } catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

 const CategoriesSlice = createSlice({
    name:'categories',
    initialState:{
        list:[],
        isLoading:false,
        categories:[]
    },
    reducers:{},    
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state)=>{
            state.isLoading=true;   
        });
        builder.addCase(getCategories.fulfilled,(state,{payload})=>{
            state.list=payload;
            state.isLoading=false;  
        });
        builder.addCase(getCategories.rejected,(state)=>{
            state.isLoading=false;  
        });
    }
 })

 export default CategoriesSlice.reducer;