import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../custom/button/styledButton/styledButton';
import { ReactComponent as WelcomeIcon} from '../../assets/welcome.svg';
// import Button from "../../custom/button/button";

const Welcome = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/create-account');
		console.log("aaa")
	};

	return (
		<main className={styles.main}>
					<section className={styles.section}>
			<article className={styles.article}>
				<h1 className={styles.heading}>
				<WelcomeIcon className={styles.welcomeIcon} />
					{/* <img src={Welocome} className={styles.welcomeIcon} /> */}
					WELCOME GODWIN!
				</h1>
				<p className={styles.para}>
					Fill out your application, check status and make <br /> payment all from the comfort of your dashboard.
				</p>
			</article>

			{/* <Link className={styles.btn} to='/create-account'>
				CONTINUE TO DASHBOARD
			</Link> */}

            {/* <div  className={styles.section2}>
			    <Button className={styles.btn} text="PROCEED TO PAYMENT" />
		    </div> */}

            <div  className={styles.section2}>
			    <Button className={styles.btn} onClick={()=>{handleNavigate()}} text="CONTINUE TO DASHBOARD" />
		    </div>
		</section>

		</main>

	);
};

export default Welcome;
