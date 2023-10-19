import React from 'react';
import s from './../../styles/Home.module.css';
const Poster = () => {
    return ( 
        <section className={s.home}>
            <div className={s.title}>Big sALE 20%</div>
            <div className={s.product}>
                <div className={s.text}>
                <div className={s.subtitle}>The bestseller of 2023</div>
                <h1 className={s.head}>Lennon</h1>
                <button className={s.button}>Shop now</button>
                </div>
                <div className={s.image}>
                    <img src="#" alt="" />
                </div>
            </div>
        </section>
     );
}
 
export default Poster;