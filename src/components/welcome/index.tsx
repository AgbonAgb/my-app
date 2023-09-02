import styles from './styles.module.scss';
import Welocome from '../../assets/welcome-icon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Say from '../../say';

const Welcome = () => {
	// const navigate = useNavigate();

	// const handleNavigate = () => {
	// 	navigate('/create-account');
	// };

	return (
		<section className={styles.section}>
			<article className={styles.article}>
				<h1 className={styles.heading}>
					<img src={Welocome} className={styles.welcomeIcon} />
					WELCOME GODWIN!
				</h1>
				<p className={styles.para}>
					Fill out your application, check status and make <br /> payment all from the comfort of your dashboard.
				</p>
			</article>

			<Link className={styles.btn} to='/create-account'>
				CONTINUE TO DASHBOARD
			</Link>
		</section>
	);
};

export default Welcome;
