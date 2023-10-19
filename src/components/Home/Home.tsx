import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Product';
import { useSelector } from 'react-redux';
import './../../styles/Home.module.css';
const Home = () => {
  const {list}= useSelector(({products})=>products)
    return (
      <>
      <Poster/>
       <Products products={list}  amount={5} title='Trending'/>
      </>
       
      );
}
 
export default Home;