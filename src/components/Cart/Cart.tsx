import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./../../styles/Cart.module.css";
import { sumBy } from "../../utils/common";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/UserSlice";

export const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };
  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={s.cart}>
      <h2 className={s.title}>Your cart</h2>
      {!cart.length ? (
        <div className={s.empty}>Here is empty</div>
      ) : (
        <>
          <div className={s.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={s.item} key={id}>
                  <div
                    className={s.image}
                    style={{ backgroundImage: `url('тут будет ссылка img')` }}
                  />
                  <div className={s.info}>
                    <h3 className={s.name}>{title}</h3>
                    <div className={s.category}>{category.name}</div>
                  </div>
                  <div className={s.price}>{price}$</div>
                  <div className={s.quantity}>
                    <div
                      className={s.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                      </svg>
                    </div>
                    <span>{quantity}</span>
                    <div
                      className={s.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>{" "}
                    </div>
                  </div>
                  <div className={s.total}>{price * quantity}$</div>
                  <div className={s.close} onClick={() => removeItem(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
              );
            })}
            ;
          </div>
          <div className={s.actions}>
            <div className={s.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            <button className={s.proceed}>Procet to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};
