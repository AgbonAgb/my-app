import styles from '../login/login.module.scss';
import Input from '../../custom/input/input';
import Button from '../../custom/button/button';
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
//import { request } from '../utils/apiCall';
import { request } from '../../utils/apiCall';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [token, setToken] = useState(() => localStorage.getItem('token'));

	useEffect(() => {
		if (token) {
			navigate('/dashboard');
		}
	}, [token]);

	//Set/Declaration of States
	const [EmailAddress, setEmail] = useState(''); //Value and action
	//setPassword
	const [Password, setPassword] = useState('');

	//Handle Input changes
	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(value);
	};
	//handlePassword
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPassword(value);
	};

	//Handle Submit
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const LoginDto = {
			email: EmailAddress,
			password: Password,
		};

		setIsLoading(true);
		setError('');
		setSuccessMessage('');

		try {
			const token = (await request.post('/Authentication/Authenticate', LoginDto))?.data as string;
			localStorage.setItem('token', token);
			setToken(token);
			setSuccessMessage('User Login successful');
		} catch (error: any) {
			setError(error?.response?.data?.message ?? error?.mesage);
		} finally {
			setIsLoading(false);
		}
	};

	//Rt
	return (
		<section className={styles.inputSection}>
			<form onSubmit={handleSubmit}>
				<Input placeholder='Email' type='email' name='Email' onChange={handleEmail} value={EmailAddress} />
				<Input placeholder='Password' type='password' name='Password' onChange={handlePassword} value={Password} />
				<p className={styles.para1}>Forgot Password?</p>
				<Button text={isLoading ? 'Sign in...' : 'SIGN IN'} className={styles.btn} disabled={isLoading} />
				{error && <p className='error'>{error}</p>}
				{successMessage && <p className='success'>{successMessage}</p>}
				<p className={styles.para}>
					Don’t have an account?
					<Link to='/create-account' className={styles.span}>
						SIGN UP
					</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;
