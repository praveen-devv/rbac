import React, { useState } from 'react'
import './Login.css'
import {FaUserCircle, FaLock} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    let navigate = useNavigate();

    const users = useSelector(state => state.user.userCredentials)
    const dispatch = useDispatch()

    const handleLogin = (event) =>{
        event.preventDefault()
        // dispatch(addUser({'username':username,'password':password}))
        console.log(users)
        if(username===users[0].username && password === users[0].password){
            console.log( 'success')
            navigate('/dashboard')
        }
        else{
            alert('Enter the correct username and password')
        }
    }

    return (
        <div className='login'>
                
                <form className='login-form' onSubmit={handleLogin} autoComplete='off'>
                    <h3>Login</h3>
                    <div className='input-field'>
                        <FaUserCircle className='icon' /><input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required />
                    </div>
                    <div className='input-field'>
                        <FaLock className='icon' /><input type='password' name='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Password' required />
                    </div>
                    <button type='submit' className='login-btn' >Login</button>
                </form>
        </div>
    )
}

export default Login
