import React, {FC} from 'react';
import { NavLink } from 'react-router-dom'; 
 import s from './../../styles/Sidebar.module.css';
 interface SidebarProps {
    categories:string
 }
const Sidebar:FC<SidebarProps> = ({categories}) => {
    return ( 
        <div className={s.sidebar}> 
        <div className={s.title}>Categories</div>
        <nav>
            <ul className={s.menu}>
            <li>
                {/* <Navlink to='/'>Link</Navlink> */}
            </li>
            </ul>
        </nav>
        </div>
     );
}
 
export default Sidebar;