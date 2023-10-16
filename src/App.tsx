import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { IProduct } from './types/types';
import axios from 'axios';
import List from './components/List';
function App() {
  const [product,setProduct]=useState<IProduct[]>([]);
  useEffect(()=>{
fetchProducts();
  },[])
  async function fetchProducts() {
    try {
      const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProduct(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="App">
    <Header/>
    <List
    items={product}
    renderItem={(product:IProduct)=><Product product={product} key={product.id}/>}/>
    <Footer/>
      
    </div>
  );
}

export default App;
