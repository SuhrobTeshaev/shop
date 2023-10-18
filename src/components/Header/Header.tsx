import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import s from './../../styles/Header.module.css';
const Header = () => {
    return ( 
        <header className={s.header}>
           <div className={s.logo}>
        <Link to={ROUTES.Home}>
        <img src="#" alt="#" />
         </Link>

           </div>
           <form >
            <input type="search" placeholder="Поиск товаров " autoComplete="off" />
            <div className="box"></div>
           </form>
           <div className={s.account}>
            <Link to={ROUTES.Home}></Link>
           </div>
           <div className={s.favourites}>
            <Link to={ROUTES.Home}></Link>
            favourites
           </div>
           <div className={s.cart}>
            <Link to={ROUTES.Cart}>
            Корзина
                <span className={s.count}>2</span>
            </Link>
           </div>
            
            
        </header>
     );
}
 
export default Header;