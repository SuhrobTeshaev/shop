import React, { FC, useEffect, useState } from "react";
import s from "./../../styles/Product.module.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/user/UserSlice";
import { strict } from "assert";

interface ProductProps {
  images:[''];
  title: string;
  price: number;
  description: string;
  currentImage: string;
  onClick: ()=> void;
}
const Sizes = [4, 4.5, 5];
export const Product: FC<ProductProps> = (item) => {
  const { images,  title, price, description } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState('');
  const [currentSize, setCurrentSize] = useState<number|null>(null);

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={s.product}>
      <div className={s.images}>
        <div
          className={s.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={s["images-list"]}>
          {images.map((image,id) => (
            <div
              key={id}
              className={s.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={s.info}>
        <h1 className={s.title}> {title}</h1>
        <div className={s.price}>{price}$</div>
        <div className={s.color}>
          <span>Color</span>Green
        </div>
        <div className={s.sizes}>
          <span>Sizes:</span>
          <div className={s.list}>
            {Sizes.map((size,index) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${s.size} ${currentSize === size ? s.active : ""}`}
                key={index}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.actions}>
          <button onClick={addToCart} className={s.add} disabled={!currentSize}>
            Add to cart
          </button>
          <button className={s.favourite}>Add to favourite</button>
        </div>
        <div className={s.bottom}>
          <div className={s.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};
