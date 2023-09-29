import styles from "./styles.module.scss";
import welimg from "../../assets/welcome-icon.jpg";
import NairaSign from "../../assets/NairaSign.jpg";
import Arrow from "../../assets/Arrow.jpg";
import { ReactComponent as Welcome } from "../../assets/welcome.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import currencyFormatter from "currency-formatter";
// import Button from "../../custom/button/button";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  amount: number;
}

// new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
const PaymentMSG = ({ amount }: Props) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/create-account');
		console.log("aaa")
	};
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article>
          <h1 className={styles.heading}>
            <Welcome className={styles.welcomeIcon} />
            WELCOME BACK GODWIN!
          </h1>
		  
          <p className={styles.para}>
            Your application form has been filled successfully.
            <br /> To complete the application process, kindly proceed to pay{" "}
            <br /> the application fee.
          </p>

          <section className={styles.para2}>
            <h1 className={styles.fee}>
              Application Fee:{" "}
              <span className={styles.amount}>
                {currencyFormatter.format(amount, { code: "NGN" })}
              </span>
            </h1>
			
          </section>
        </article>

			
		<div  className={styles.section2}>
			<Button className={styles.btn}   endIcon={<ArrowRight className={styles.backicon} />} > PROCEED TO PAYMENT </Button>
		</div>
		<p className={styles.ctndb} onClick={handleNavigate}>CONTINUE DASHBOARD</p>

		{/* <section className={styles.main}>
			<section className={styles.section2}>
			<div className={styles.line}></div>

			</section>

		</section> */}




        {/* <button className={styles.btn}>
          PROCEED TO PAYMENT <ArrowRight className={styles.nairaicon} />
        </button>
        <p className={styles.ctndb}>CONTINUE DASHBOARD</p> */}
      </section>

    </main>
  );
};

export default PaymentMSG;
