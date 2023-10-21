import React from 'react'
import { useSelector } from 'react-redux'
import { UserSignupForm } from './UserSignupForm'
import s from './../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../features/user/UserSlice';
export const UserForm = () => {
    const dispatch = useDispatch();
    const {showForm} = useSelector(({user})=>user)
    const closeForm = () => dispatch(toggleForm(false));
  return (
    showForm?( <>
    <div className={s.overlay}
    onClick={closeForm}
    />
    <UserSignupForm closeForm={closeForm}/>:</>
    ):
    <></>);
    
    };
    

