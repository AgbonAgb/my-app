import styles from './styles.module.scss';
import Welocome from '../../assets/welcome-icon.jpg';
const Welcome = () => {
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

			<button className={styles.btn}>CONTINUE TO DASHBOARD</button>
		</section>
	);
};

export default Welcome;
