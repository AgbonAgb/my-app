import styles from '../login/login.module.scss';
import Input from '../../custom/input/input';
import Button from '../../custom/button/button';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<section className={styles.inputSection}>
			<form>
				<Input placeholder='Email' type='email' name='Email' />
				<Input placeholder='Email' type='password' name='Password' />
				<p className={styles.para1}>Forgot Password?</p>
				<Button text='SIGN IN' className={styles.btn} />
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
