import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../configs'
import './Register.scss'
const Register = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [alias, setAlias] = useState('')
	const [error, setError] = useState('')
	const [dataError, setDataError] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		setLoading(true)

		if (email && password && alias) {
			signUp({ email, password, alias })
				.then(r => {
					console.log(r)
					if (r.id) {
						navigate('/auth/login')
					} else {
						setDataError(r)
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
							<p>User:</p>
							<input
								type="text" placeholder='Ivan Ivanov'
								value={alias}
								onChange={e => setAlias(e.target.value)}
							/>
						</span>
						{
							dataError.alias && dataError.alias.map((err, index) => (
								<h5 key={index}> {err} </h5>
							))
						}
					</label>
					<label>
						<span>
							<p>Email:</p>
							<input
								type="email" placeholder='ivanIvanov@gmail.com'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</span>
						{
							dataError.email && dataError.email.map((err, index) => (
								<h5 key={index}> {err} </h5>
							))
						}
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
						{
							dataError.password && dataError.password.map((err, index) => (
								<h5 key={index}> {err} </h5>
							))
						}
					</label>
					{error && (<h5 className='error'> {error} </h5>)}
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

export default Register
