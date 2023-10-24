import React, { useState } from 'react'
import s from './../../styles/User.module.css';
import { loginUser } from '../../features/user/UserSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
export const UserLoginForm = ({toggleCurrentFormType,closeForm}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        avatar:''
    });
    const handleChange = ({target:{value,name}}) =>{
        setValues({...values,[name]:value});
    };
    // const handleSubmit = (e) =>{
    //     e.prevetDefault();
    //     const isNotEmpty = Object.values(values).every(val=>val);
    //     if(!isNotEmpty) return;
    //     dispatch(loginUser(values)); 
    //     closeForm();
    // }
  return (
    <div className={s.wrapper}>
        <div className={s.close} onClick={closeForm}>
            тут будет свг иконка close
        </div>
        <div className={s.title}>
            log In
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
                type="password" 
                name='password' 
                placeholder='Your password' 
                value={values.password}
                onChange={handleChange} 
                autoComplete='off'
                required
                 />
                 
            </div>
            <div className={s.link} onClick={()=> toggleCurrentFormType('signup')}>Create an account</div>
            <button type='submit' className={s.submit}>
                Login
            </button>
        </form>
    </div>
  ) 
}
