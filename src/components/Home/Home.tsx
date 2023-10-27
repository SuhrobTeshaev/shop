import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import ProductsComponent from "../Products/Products";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../features/products/ProductsSlice";
const Home = () => {
  const dispatch = useDispatch();

  const { list, filtered } = useSelector((state: any) => state.products);
  const { categories } = useSelector((state: any) => state.categories);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list]);
  return (
    <>
      <Poster />
      <ProductsComponent products={list || []} amount={5} title="Trending" />
      <Categories
        products={categories.list || []}
        amount={5}
        title="Worth seeing"
      />
      <Banner />
      <ProductsComponent
        products={filtered || []}
        amount={5}
        title="Less than 100$"
      />
    </>
  );
};

export default Home;
