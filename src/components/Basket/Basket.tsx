import React,{FC} from "react";
import { IProduct } from "../../types/types";

interface BasketProps {
    product:IProduct
}

const Basket:FC<BasketProps> = ({product}) => {
   
     
       
    return ( 
        <>
        <table>
            <thead>
            <tr>
                <th>Наименование товара</th>
                <th>Ценна за шт.</th>
                <th>Кол-во</th>
                <th>Ценна</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            <button>-</button>
                            <span className="count">{product.count}</span>
                            <button>+</button>
                        </td>
                        <td>{product.price*product.count}</td>
                        <td>
                            <button onClick={()=>removeProduct(product.id)}>X</button>
                        </td>
                    </tr>
            
            </tbody>
        </table>
        {!!products.length && Result}
        </> 
    );
}
 
export default Basket;