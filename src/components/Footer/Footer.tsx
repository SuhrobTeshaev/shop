import { Link } from 'react-router-dom';
import s from './../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
const Footer = () => {
    return (  
        <footer  className={s.footer}>
            <div className={s.logo}>
                <Link to={ROUTES.Home}>
                
                </Link>
            </div>
            <div className={s.rights}>
                Все права защищены &copy
            </div>
            <div className={s.socials}></div>
        </footer>
    );
}
 
export default Footer;