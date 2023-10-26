import styles from "./main.module.scss";
import welimg from "../../../assets/welcome-icon.jpg";
import NairaSign from "../../../assets/NairaSign.jpg";
import Arrow from "../../../assets/Arrow.jpg";
import { ReactComponent as Welcome } from "../../../assets/welcome.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right.svg";
import { ReactComponent as Mark } from "../../../svgs/mark.svg";

import currencyFormatter from "currency-formatter";
// import Button from "../../custom/button/button";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../../users/editModal";
import Button from "../../../custom/button/styledButton/styledButton";

interface Props {
  amount: number;
  handleCloseEditModal: () => void;
}

// new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
const PaymentMSG = ({ amount,handleCloseEditModal }: Props) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/create-account');
		console.log("aaa")
	};
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article>
          {/* <h1 className={styles.heading}>
            <Welcome className={styles.welcomeIcon} />
            WELCOME BACK GODWIN!
          </h1> */}

          <div className={styles.main2}>
          <Mark/>
          </div>
          

		  
          <p className={styles.para}>
          Your application formed has been saved successfully. Proceed to payment
           to complete your application or save, exit & pay at a later date.
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

        <FormWrapper>            
            <Button
              text=  "SAVE & EXIT"
              className={styles.button}
              onClick={handleCloseEditModal}
            />
             <Button
              text= "PROCEED TO PAYMENT"
              className={styles.button}
            />
            </FormWrapper>


			
		
        

      </section>

    </main>
  );
};

export default PaymentMSG;
