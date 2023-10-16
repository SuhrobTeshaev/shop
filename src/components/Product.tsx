
import React,{FC} from "react";
import { IProduct } from "../types/types";

interface ProductProps {
     product:IProduct   
}
const Product:FC<ProductProps> = ({product}) => {
    return <div className="card"> 
     <div  className='product-card'key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <b>{product.price}</b>
            {/* <p>{product.description}</p> */}
            </div>
            </div >
    
  
            
     
}
 
export default Product;