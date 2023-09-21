import { ChangeEvent, FormEvent, MouseEvent, useState, Fragment } from 'react';
import styles from './index.module.scss';
import Input from '../../../custom/input/input';
import Button from '../../../custom/button/button';
import { request } from '../../utils/apiCall';
import { Link } from 'react-router-dom';

interface Person {
	name: string;
}

const Form = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	// const [firstName, setFirsName] = useState('');
	// const [lastName, setLastName] = useState('');
	const [PhoneNumber, setPhoneNumber] = useState(''); //Value and action
	//setEmail
	const [EmailAddress, setEmail] = useState(''); //Value and action
	//setPassword
	const [Password, setPassword] = useState(''); //Value and action
	//setConfirmPassword
	const [ConfirmPassword, setConfirmPassword] = useState(''); //Value and action

	//Generic
	const [person, setPerson] = useState({
		firstName: '',
		lastName: '',
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const user = {
			firstName: person.firstName,
			lastName: person.lastName,
			userType: 'Applicant',
			userName: `${person.firstName}${person.lastName}`,
			email: EmailAddress,
			password: Password,
		};

		setIsLoading(true);
		setError('');
		setSuccessMessage('');

		try {
			(await request.post('/Authentication/RegisterUser', user)) as Person;

			setSuccessMessage('User has been successfully registered');
		} catch (error: any) {
			setError(error?.response?.data?.message ?? error?.mesage);
		} finally {
			setIsLoading(false);
		}
	};

	//generic
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;

		setPerson(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	//Individual
	// const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setFirsName(value);
	// };

	// const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setLastName(value);
	// };

	const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPhoneNumber(value);
	};

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(value);
	};
	//handlePassword
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPassword(value);
	};

	//handleConfirmPassword
	const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setConfirmPassword(value);
	};

	return (
		<Fragment>
			<main className={styles.main}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<section className={styles.inputSection}>
					<Input
						placeholder='First Name'
						type='text'
						name='firstName'
						onChange={handleChange}
						value={person.firstName}
					/>
					<Input placeholder='Last Name' type='text' name='lastName' onChange={handleChange} value={person.lastName} />
					{/* <Input placeholder='First Name' type='text' name='firstName' onChange={handleFirstName} value={firstName} />
				<Input placeholder='Last Name' type='text' name='lastName' onChange={handleLastName} value={lastName} /> */}
					<Input placeholder='Phone Number' type='text' name='PhoneNumber' onChange={handlePhone} value={PhoneNumber} />
					<Input
						placeholder='Email Address'
						type='email' name='EmailAddress' onChange={handleEmail} value={EmailAddress}
					/>
					<Input placeholder='Password' type='password' name='Password' onChange={handlePassword} value={Password} />
					<Input
						placeholder='Confirm Password'
						type='password'
						name='ConfirmPassword'
						onChange={handleConfirmPassword}
						value={ConfirmPassword}
					/>
				</section>
				<Button text={isLoading ? 'Sign up...' : 'SIGN UP'} className={styles.btn} disabled={isLoading} />
				{error && <p className='error'>{error}</p>}
				{successMessage && <p className='success'>{successMessage}</p>}
				<p className={styles.para}>
					Already have an account?
					<Link to='/login' className={styles.span}>
						SIGN IN
					</Link>
				</p>
			</form>

			</main>
			
		</Fragment>
	);
};

export default Form;
