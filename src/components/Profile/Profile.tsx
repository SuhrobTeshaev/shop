import React,{useEffect} from 'react'
import s from './../../styles/Profile.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from '../../features/user/UserSlice';

export const Profile = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(({user})=>user);
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        avatar:''
    });

    
    useEffect(()=>{
        if(!currentUser) return;
        setValues(currentUser)
    },[currentUser]);
    const handleChange = ({target:{value,name}}) =>{
        setValues({...values, [name]:value});
    };
    const handleSubmit = (e) =>{
        e.prevetDefault();
        const isEmpty = Object.values(values).some(val=>!val);
        if(!isEmpty) return;
        dispatch(updateUser(values)); 
        
    }
  return (
    <section className={s.profile}>
        {!currentUser? <span>You need to log in</span>:
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
          </div>
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
     <button 
     type='submit'
    className={s.submit}
    
     >Update</button>
     </form>
        }
    </section>
  )
};
