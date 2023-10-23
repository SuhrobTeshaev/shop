import React from 'react'
import { useSelector } from 'react-redux'
import s from './../../styles/Cart.module.css';
import { sumBy } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../features/user/UserSlice';
export const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(({user})=>user);
    const changeQuantity = (item,quantity) => {
        dispatch(addItemToCart({...item,quantity}));
    };
    const removeItem = (id)=>{
        dispatch(removeItemFromCart(id))
    }
  return (
    <section className={s.cart}>
        <h2 className={s.title}>Your cart</h2>
        {!cart.length? (
            <div className={s.empty}>Here is empty</div>
        ):(
            <>
            <div className={s.list}>
                {cart.map((item)=>{
                    const {title,category,images,price,id, quantity} = item
                    return  <div className={s.item} key={id}>
                        <div 
                        className={s.image}
                        style={{backgroundImage:`url('тут будет ссылка img')`}}
                        />
                        <div className={s.info}>
                        <h3 className={s.name}>{title}</h3>
                        <div className={s.category}>{category.name}</div>
                        </div>
                        <div className={s.price}>{price}$</div>
                        <div className={s.quantity}>
                        <div className={s.minus} 
                        onClick={()=>changeQuantity(item,Math.max(1,quantity-1))}>
                            <svg>
                                тут ссылка на иконьку минус
                            </svg>
                        </div>
                        <span>{quantity}</span>
                        <div className={s.plus} 
                        onClick={()=>changeQuantity(item,Math.max(1,quantity-1))}>
                            <svg>
                                тут ссылка на иконьку плюс
                            </svg>
                        </div>
                        </div>
                        <div className={s.total}>{price * quantity}$</div>
                        <div className={s.close} onClick={()=>removeItem(item.id)}>
                            <svg>
                                тут ссылка на иконьку close
                            </svg>
                        </div>
  
                    </div>

                })};
            </div>
            <div className={s.actions}>
                <div className={s.total}>
                    TOTAL PRICE:{' '}
                    <span>
                        {sumBy(cart.map(({quantity,price})=>quantity * price))}$
                    </span>
                </div>
                <button className={s.proceed}>Procet to checkout</button>
            </div>
            </>
        )}
    </section>
  )
}
