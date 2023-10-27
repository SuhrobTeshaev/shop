import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../../styles/Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log("list", list);
  return (
    <div className={s.sidebar}>
      <div className={s.title}>Categories</div>
      <nav>
        <ul className={s.menu}>
          {list.map(({ id, name }) => {
            <li key={id}>
              <NavLink to={`/Categories/${1}`}>Link</NavLink>
            </li>;
          })}
        </ul>
      </nav>
      <div className={s.footer}>
        <a href="/help" target="_blank" className={s.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={s.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
