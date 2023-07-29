import styles from './styles.module.scss'
import welimg from '../../assets/welcome-icon.jpg'
import NairaSign from '../../assets/NairaSign.jpg'
import Arrow from '../../assets/Arrow.jpg'
const PaymentMSG = () => {
    return (
        <section className={styles.section}>
            <article>
                <h1 className={styles.heading}>
                    <img src={welimg} className={styles.welcomeIcon} />
                    WELCOME BACK GODWIN!
                </h1>
                <p className={styles.para}>
                    Your application form has been filled successfully.<br /> To complete the application process, kindly proceed to pay <br />  the application fee.
                </p>
                <p className={styles.para2}>
                    <h1>
                        <i className={styles.fee}>Application Fee:</i>
                        <img src={NairaSign} className={styles.nairaicon} />
                    </h1>
                </p>
            </article>
            <button className={styles.btn}>
                PROCEED TO PAYMENT

            </button>
            <p className={styles.ctndb}>CONTINUE DASHBOARD</p>
        </section>
    )
}

export default PaymentMSG