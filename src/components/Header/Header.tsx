import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import s from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/UserSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const { currentUser, cart } = useSelector(({ user }) => user);
  const [values, setValues] = useState({ name: "Guest", avatar: "" });
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src="ссылка на логотип" alt="#" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.user} onClick={handleClick}>
          <div
            className={s.avatar}
            style={{ backgroundImage: `url(${values.avatar}})` }}
          />
          <div className={s.username}>{values.name}</div>
        </div>
      </div>
      <form className={s.form}>
        <div className={s.icon}>
          <svg>ссылка на иконьку</svg>
        </div>
        <div className={s.input}>
          <input
            type="search"
            placeholder="Поиск товаров "
            autoComplete="off"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>

        {searchValue && (
          <div className="box">
            {isLoading
              ? "Loading"
              : !data.length
              ? "No results"
              : data.map(({ title, image, id }) => {
                  return (
                    <Link
                      key={id}
                      onClick={() => setSearchValue("")}
                      className={s.item}
                      to={`/products/${id}`}
                    >
                      <div
                        className={s.image}
                        style={{
                          backgroundImage: `url(тут будет ссылка на img)`,
                        }}
                      />
                      <div className={s.title}>{title}</div>
                    </Link>
                  );
                })}
          </div>
        )}
      </form>
      <div className={s.account}>
        <Link to={ROUTES.HOME} className={s.favourites}>
          favourites
        </Link>

        <Link to={ROUTES.CART} className={s.cart}>
          Корзина
          {!!cart.length && <span className={s.count}>{cart.length}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
