import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "./../../features/api/apiSlice";
import s from "./../../styles/Category.module.css";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store";

export const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };
  const [isEnd, setEnd] = useState<boolean>(false);
  const [cat, setCat] = useState<any>(null);
  const [items, setItems] = useState<any>([]);
  const [values, setValues] = useState<{
    title: string;
    price_min: number;
    price_max: number;
  }>(defaultValues);
  const [params, setParams] = useState(defaultParams);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);
  useEffect(() => {
    if (!isLoading) return;

    if (!data.length) return setEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id) return;
    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
    
  }, [id]);
  useEffect(() => {
    if (!id || !list.length) return;
    const category = list.find(({ item }) => item.id === parseInt(id));
    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };
  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setEnd(false);
  };

  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>{cat?.name}</h2>
      <form className={s.filters} onSubmit={handleSubmit}>
        <div className={s.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className={s.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={s.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className={s.back}>
          <span>No result</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: "0" }}
          amount={items.length}
        />
      )}
      {isEnd && (
        <div className={s.more}>
          <button
            onClick={() =>
              setParams({
                ...params,
                offset: (Number(params.offset) +
                  Number(params.limit)),
              })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};
