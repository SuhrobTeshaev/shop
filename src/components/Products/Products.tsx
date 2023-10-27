import React from "react";
import { Link } from "react-router-dom";
import s from "./../../styles/Products.module.css";
const ProductsComponent = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={s.products}>
      {title && <h2>{title}</h2>}
      <div className={s.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={s.product}>
            <div
              className={s.image}
              style={{ backgroundImage: `url('тут будет картинка'` }}
            />
            <div className={s.wrapper}>
              <h3 className={s.title}>{title}</h3>
              <div className={s.cat}>{cat}</div>
              <div className={s.info}>
                <div className={s.prices}>
                  <div className={s.price}>{price}$</div>
                  <div className={s.oldPrice}>{Math.floor(price * 0.8)}$</div>
                </div>
                <div className={s.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchases
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsComponent;
