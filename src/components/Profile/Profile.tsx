import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/UserSlice";
import s from "./../../styles/Profile.module.css";
import { AppDispatch } from "../../features/store";

export const Profile = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    id:1,
    name: '',
    email: '',
    password: '',
    avatar:''
  });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };
  return (
    <section className={s.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.group}>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <div className={s.group}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={s.group}>
            <input
              type="number"
              name="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={s.group}>
            <input
              type="text"
              name="avatar"
              placeholder="Your avatar"
              value={values.avatar}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className={s.submit}
            
          >
            Update
          </button>
        </form>
      )}
    </section>
  );
};
