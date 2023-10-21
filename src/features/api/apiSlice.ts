import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constant';


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    tagTypes:["Products"],
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:({id})=>`/products/${id}`,
            providesTags:['Products'],
        })
    })
})

export const {useGetProductsQuery} = apiSlice;