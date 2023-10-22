import React from 'react'
import { useSelector } from 'react-redux'
import { UserSignupForm } from './UserSignupForm'
import s from './../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { toggleForm, toggleFormType } from '../../features/user/UserSlice';
import { UserLoginForm } from './UserLoginForm';
export const UserForm = () => {
    const dispatch = useDispatch();
    const {showForm,formType} = useSelector(({user})=>user)
    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return (
    showForm?( <>
    <div className={s.overlay}
    onClick={closeForm}
    />
    {formType ==='signup'?<UserSignupForm 
    toggleCurrentFormType={toggleCurrentFormType}
    closeForm={closeForm}/>:
    <UserLoginForm 
    toggleCurrentFormType={toggleCurrentFormType}
    closeForm={closeForm}/>}
    :</> 
    ):
    <></>);
    
    };
    

