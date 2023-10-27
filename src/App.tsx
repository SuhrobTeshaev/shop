import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { getCategories } from "./features/categories/CategoriesSlice";
import { AppDispatch } from "./features/store";
import { getProducts } from "./features/products/ProductsSlice";
import { UserForm } from "./components/user/UserForm";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
