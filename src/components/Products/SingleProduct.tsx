import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import { Product } from './Product';
import Products from './Products';
import { useDispatch } from 'react-redux';
import { getReletedProducts } from '../../features/products/ProductsSlice';
import { useSelector } from 'react-redux';

export const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {data,isLoading,isFetching,isSuccess} = useGetProductsQuery({id});
    const navigate = useNavigate();
    const {list,releted} = useSelector(({products})=>products)
    useEffect(()=>{
        if(!isFetching && !isLoading  && !isSuccess){
            navigate(ROUTES.HOME)
        }
    },[isLoading,isFetching,isSuccess]);
    useEffect(() =>{
        if(!data || !list.length) return;
        dispatch(getReletedProducts(data.category.id))
    },[data,dispatch,list.length])
  return !data? (
    <section className='preloader'>Loading...</section>
  ):(
    <>
        <Product {...data}/>
        <Products products={releted} amount={5} title='Releted products'/>
    </>
  )

    
  
}
