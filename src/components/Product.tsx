import React, { FC } from "react";
import { IProduct } from "../types/types";

interface ProductProps {
  product: IProduct;
}
const Product: FC<ProductProps> = ({ product }) => {
  return (

      <div className="container" key={product.id}>
          <div className="product-card">
               <div className="card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <b>{product.price}</b>
          <div className="add-to-card">+</div>
        </div>
        </div>
        
      </div>
    
  );
};

export default Product;
