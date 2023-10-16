import { title } from "process";
import React,{FC} from "react";


interface ProductProps {
    id:number,
    title:string
}
const Product:FC<ProductProps> = () => {
    return ( 
        <div>products</div>
     );
}
 
export default Product;