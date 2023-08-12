
import styles from './index.module.scss';
import Input from '../../../custom/input/input';
import Button from '../../../custom/button/button';

const Form = () => {
    return <form className={styles.form}>
        <section className={styles.inputSection}>
            <Input placeholder='First Name' type='text' />
            <Input placeholder='Last Name' type='text' />
            <Input placeholder='Phone Number' type='text' />
            <Input placeholder='Email Address' type='email' />
            <Input placeholder='Password' type='password' />
            <Input placeholder='Confirm Password' type='password' />
        </section>
        <Button text='SIGN UP' className={styles.btn} />
        <p className={styles.para}>Already have an account?<span className={styles.span}>SIGN IN</span></p>
    </form>
}

export default Form;