import React, { useState } from 'react'
import s from './../../styles/User.module.css';
// import { createUser } from '../../features/user/UserSlice';
import { useDispatch } from 'react-redux';

export const UserSignupForm = ({toggleCurrentFormType,closeForm}) => {
    const dispatch = useDispatch();
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        avatar:''
    });
    const handleChange = ({target:{value,name}}) =>{
        setValues({...values, [name]:value});
    };
    
    const handleSubmit = (e) =>{
        e.prevetDefault();
        const isEmpty = Object.values(values).some(val=>!val);
        if(!isEmpty) return;
        dispatch(createUser(values)); 
        closeForm();
    }
    
  return (
    <div className={s.wrapper}>
        <div className={s.close} onClick={closeForm}>
            тут будет свг иконка close
        </div>
        <div className={s.title}>
            Sign Up
        </div>
        <form className={s.form}>
            <div className={s.group}>
                <input 
                type="email" 
                name='email' 
                placeholder='Your email' 
                value={values.email}
                onChange={handleChange} 
                autoComplete='off'
                required
                 />
            </div>
            
            <div className={s.group}>
                <input 
                type="name" 
                name='name' 
                placeholder='Your name' 
                value={values.name}
                onChange={handleChange}
                autoComplete='off'
                required
                 />
            </div>
            <div className={s.group}>
                <input 
                type="password" 
                name='password' 
                placeholder='Your password' 
                value={values.password}
                onChange={handleChange} 
                autoComplete='off'
                required
                 />
                 <div className={s.group}>
                <input 
                type="avatar" 
                name='avatar' 
                placeholder='Your avatar' 
                value={values.avatar}
                onChange={handleChange}
                autoComplete='off'
                required
                 />
            </div>
            </div>
            <div className={s.link} onClick={()=>toggleCurrentFormType('login')}>I already have an account</div>
            <button type='submit' className={s.submit} onClick={handleSubmit}>
                Create an account
            </button>
        </form>
    </div>
  ) 
}
