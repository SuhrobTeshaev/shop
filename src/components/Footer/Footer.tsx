import { Link } from 'react-router-dom';
import s from './../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
const Footer = () => {
    return (  
        <section  className={s.footer}>
            <div className={s.logo}>
                <Link to={ROUTES.HOME}>
                
                </Link>
            </div>
            <div className={s.rights}>
                Все права защищены &copy
            </div>
            <div className={s.socials}>
                <a
                 href="https://youtube.com"
                 target='_blank'
                 rel='noreferrer'
                >
                    тут будет иконка
                </a>
                <a
                 href="https://youtube.com"
                 target='_blank'
                 rel='noreferrer'
                >
                    тут будет иконка
                </a>
                <a
                 href="https://instagram.com"
                 target='_blank'
                 rel='noreferrer'
                >
                    тут будет иконка
                </a>
                <a
                 href="https://vk.ru"
                 target='_blank'
                 rel='noreferrer'
                >
                    тут будет иконка
                </a>
                <a
                 href="https://tg.ru"
                 target='_blank'
                 rel='noreferrer'
                >
                    тут будет иконка
                </a>
            </div>
        </section>
    );
}
 
export default Footer;