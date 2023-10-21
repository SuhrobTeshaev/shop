import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import s from './Header.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/UserSlice";
import { useEffect, useState } from "react";
const Header = () => {
    const dispatch=useDispatch();
    
    const {currentUser} = useSelector(({user})=>user);
    const [values,setValues]= useState({name:'Guest', avatar:AVATAR});
    useEffect(()=>{
        if(!currentUser) return;
        setValues(currentUser)
    },[currentUser]);
    const handleClick = () =>{
        if(!currentUser) dispatch(toggleForm(true))
    }
    return ( 
        <div className={s.header}>
           <div className={s.logo}>
        <Link to={ROUTES.HOME}>
        <img src="ссылка на логотип" alt="#" />
         </Link>
           </div>
           <div className={s.info}>
            <div className={s.user} onClick={handleClick}>
            <div className={s.avatar} style={{backgroundImage:`url(${values.avatar}})`}}/>
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