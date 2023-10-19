import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import s from './Header.module.css';
const Header = () => {
    return ( 
        <div className={s.header}>
           <div className={s.logo}>
        <Link to={ROUTES.HOME}>
        <img src="ссылка на логотип" alt="#" />
         </Link>
           </div>
           <div className={s.info}>
            <div className={s.user}>
            <div className={s.avatar} style={{backgroundImage:'url(изображение)'}}/>
            <div className={s.username}>Guest</div>
            </div>
           </div>
           <form  className={s.form}>
            <div className={s.icon}>
                <svg>ссылка на иконьку</svg>
            </div>
            <div className={s.input}>
            <input type="search" placeholder="Поиск товаров " autoComplete="off" />
            </div>
            
            <div className="box"></div>
           </form>
           <div className={s.account}>
            
            <Link to={ROUTES.HOME} className={s.favourites}>
                favourites
            </Link>
           
            <Link to={ROUTES.CART} className={s.cart}>
               Корзина 
               <span className={s.count}>2</span>
            </Link>
            
           
           </div>
            
            
        </div>
     );
}
 
export default Header;