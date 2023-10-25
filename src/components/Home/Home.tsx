import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import "./../../styles/Home.module.css";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../features/products/ProductsSlice";

const Home = () => {
  const dispatch = useDispatch();
  // const {
  //   products: { list, filtered },
  // } = useSelector(({ state }) => state.products);
  // const { categories } = useSelector(({ state }) => state.categories.list);

  // useEffect(() => {
  //   if (!list.length) return;

  //   dispatch(filterByPrice(100));
  // }, [dispatch, list.length]);
  return (
    <>
      <Poster />
      {/* <Products products={list} amount={5} title="Trending" /> */}
      {/* <Categories products={categories.list} amount={5} title="Worth seeing" /> */}
      <Banner />
      {/* <Products products={filtered} amount={5} title="Less than 100$" /> */}
    </>
  );
};

export default Home;
