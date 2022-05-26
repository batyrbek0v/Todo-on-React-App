import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../configs'
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        setLoading(true)

        if (email && password) {
            signIn({ email, password, })
                .then(r => {
                    if (r.auth_token) {
                        localStorage.setItem('authToken', r.auth_token)
                        navigate('/')
                    }else {
                        setError(r)
                    }
                })
                .finally(() => { setLoading(false) })
        } else {
            setError('Заполните все поля !')
            setLoading(false)
        }
    }



    return (
        <>
            <div className='register_container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>
                            <p>Email:</p>
                            <input
                                type="email" placeholder='ivanIvanov@gmail.com'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </span>
                    </label>
                    <label>
                        <span>
                            <p>Password:</p>
                            <input
                                type="password" placeholder='password123'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </span>
              
                    </label>
                    {error && (<h5 className='error'> Неверный логин или пароль </h5>)}
                    <button
                        type="submit"
                        className='register_btn'
                        disabled={loading}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
