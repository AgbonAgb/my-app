import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import styles from './index.module.scss';
import Input from '../../../custom/input/input';
import Button from '../../../custom/button/button';

const Form = () => {
	const [state, setState] = useState('');
	const [name, setName] = useState('jude');
	// const [firstName, setFirsName] = useState('');
	// const [lastName, setLastName] = useState('');
	const [person, setPerson] = useState({
		firstName: '',
		lastName: '',
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setName('Mr BAT');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;

		setPerson(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setFirsName(value);
	// };

	// const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setLastName(value);
	// };

	console.log(person);
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<section className={styles.inputSection}>
				<Input placeholder='First Name' type='text' name='firstName' onChange={handleChange} value={person.firstName} />
				<Input placeholder='Last Name' type='text' name='lastName' onChange={handleChange} value={person.lastName} />
				{/* <Input placeholder='First Name' type='text' name='firstName' onChange={handleFirstName} value={firstName} />
				<Input placeholder='Last Name' type='text' name='lastName' onChange={handleLastName} value={lastName} /> */}
				<Input placeholder='Phone Number' type='text' />
				<Input placeholder='Email Address' type='email' />
				<Input placeholder='Password' type='password' />
				<Input placeholder='Confirm Password' type='password' />
			</section>
			<Button text='SIGN UP' className={styles.btn} onClick={handleButtonClick} />
			<p className={styles.para}>
				Already have an account?<span className={styles.span}>SIGN IN</span>
			</p>
		</form>
	);
};

export default Form;

const useName = (n: string) => {
	const [name, setName] = useState(n);

	return name;
};
