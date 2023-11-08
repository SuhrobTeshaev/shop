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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
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
        <div className={s["icon-fav"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        </Link>

        <Link to={ROUTES.CART} className={s.cart}>
        <div className={s["icon-cart"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-basket2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
          </div>
          <span className={s.count}>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
