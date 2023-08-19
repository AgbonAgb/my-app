import { ChangeEvent, FormEvent, MouseEvent, useState, Fragment } from 'react';
import styles from './index.module.scss';
import Input from '../../../custom/input/input';
import Button from '../../../custom/button/button';

interface Person {
	name: string;
}

const Form = () => {
	const [state, setState] = useState('');
	const [name, setName] = useState('jude');
	const [error, setError] = useState('');

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

	const user = {
		firstName: person.firstName,
		lastName: person.lastName,
		userType: 'MacUser',
		userName: `${person.firstName} ${person.lastName}`,
		email: EmailAddress,
		password: Password,
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch('http://myreacttest.mjdtech.ng:1977/api/Authentication/RegisterUser', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = (await response.json()) as Person;

			console.log(result);
		} catch (error: any) {
			setError(error?.response?.data?.message ?? error?.mesage);
		}
	};

	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setName('Mr BAT');
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

	console.log({
		PhoneNumber,
		EmailAddress,
		ConfirmPassword,
		Password,
		Firstname: person.firstName,
		LastName: person.lastName,
	});

	return (
		<Fragment>
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
						type='email'
						name='EmailAddress'
						onChange={handleEmail}
						value={EmailAddress}
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
				<Button text='SIGN UP' className={styles.btn} onClick={handleButtonClick} />
				<p className={styles.para}>
					Already have an account?<span className={styles.span}>SIGN IN</span>
				</p>
			</form>
		</Fragment>
	);
};

export default Form;
