import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { IProduct } from './types/types';
import axios from 'axios';
import List from './components/List';
import Basket from './components/Basket/Basket';
function App() {
  const [product,setProduct]=useState<IProduct[]>([]);
  const result = product.reduce((prevVal,curProduct)=> {
    return prevVal*curProduct.count * curProduct.price  
  },0
 );
 const Result = (
  <div className="result-panel">
      <span>
          Общая стоимость:<span className="value">{result}</span>
      </span>
      <button>Оформить</button>
      </div>
      
)
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
  
 const EmptyTemplate = (
  <div className='empty-text'>У вас еще нет товаров в корзине</div>
 );
 const handlerRemoveProduct = (id) => {
  setProduct(product.filter(product=>product.id !==id));
 };
  return (
    <div className="App">
    <Header/>
    <List
    items={product}
    
    renderItem={(product:IProduct)=><Product product={product}  key={product.id}/> } />
    
     
    

     
    <Footer/>
      
    </div>
  );
}

export default App;
