
import styles from '../login/login.module.scss';
import Input from '../../custom/input/input';
import Button from '../../custom/button/button';

const Login = () => {
   return (
      //<div>hello Godwin Agbon</div>
      <form>
         <section className={styles.inputSection}>
            <Input
               placeholder='Email'
               type='email'
               name='Email'
            />
            <Input
               placeholder='Email'
               type='password'
               name='Password'
            />
            <p className={styles.para1}>
               Forgot Password?
            </p>
         </section>
         <Button text='SIGN IN' className={styles.btn} />
         <p className={styles.para}>
            Don’t have an account?<span className={styles.span}>SIGN UP</span>
         </p>
      </form>


   );
}

export default Login;