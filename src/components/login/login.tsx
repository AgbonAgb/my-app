import styles from "../login/login.module.scss";
import Input from "../../custom/input/input";
import FormInput from "../../custom/input/formInput";
import Button from "../../custom/button/styledButton/styledButton";
import Buttons from "../../custom/button/button";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState, useEffect, useContext } from "react";
//import { request } from '../utils/apiCall';
import { request } from "../utils/apiCall";
import { useNavigate } from "react-router-dom";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import apiCall2 from "../utils/apiCall2";
import { useMutation } from "@tanstack/react-query";
import { NotificationContext } from "../../providers/Notification";
import { AppDispatch, RootState } from "../../providers/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAuth } from "../../reduxSlice/useAuthSlice";
import * as Yup from "yup";

interface LoginPayload {
  Email: string;
  Password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
//   const [token, setToken] = useState(() => localStorage.getItem("token"));
  const sessionDetails = useSelector((state: RootState) => state?.AuthUser?.userDetails)

  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
  	if (sessionDetails?.Token) {
  		navigate('/course-registration');
  	}
  }, [sessionDetails?.Token]);

  //Set/Declaration of States
  const [EmailAddress, setEmail] = useState(""); //Value and action
  //setPassword
  const [Password, setPassword] = useState("");

  //Handle Input changes
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };
  //handlePassword
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  // //Handle Submit
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  // 	e.preventDefault();

  // 	const LoginDto = {
  // 		email: EmailAddress,
  // 		password: Password,
  // 	};

  // 	setIsLoading(true);
  // 	setError('');
  // 	setSuccessMessage('');

  // 	try {
  // 		const token = (await request.post('/Authentication/Authenticate', LoginDto))?.data as string;
  // 		localStorage.setItem('token', token);
  // 		setToken(token);
  // 		setSuccessMessage('User Login successful');
  // 	} catch (error: any) {
  // 		setError(error?.response?.data?.message ?? error?.mesage);
  // 	} finally {
  // 		setIsLoading(false);
  // 	}
  // };


  const login = async (payload: LoginPayload) => {
    return (await apiCall2().post("/Authentication/Authenticate", payload))
      ?.data as any;
  };
  const loginMutation = useMutation(["login"], login, { retry: 0 });

  const signInHandler = async (values: FormikValues, resetForm: () => void) => {
    const loginPayload: LoginPayload = {
      Email: values.Email.trim(),
      Password: values.Password.trim(),
    };
    try {
      await loginMutation.mutateAsync(loginPayload, {
        onSuccess: (data) => {
          console.log(data, "data");

          showNotification({
            message: "User Log in successful",
            type: "success",
          });
        //   localStorage.setItem("token", data);
          navigate("/course-registration");

          dispatch(
            updateUserAuth({
              Token: data,
            })
          );
        },
      });
    } catch (error: any) {
      showNotification({
        message: "Incorrect Username/Password",
        type: "error",
      });
    }
  };


  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Email Address is required")
      .email("Invalid email Address"),
    Password: Yup.string().required("Password is required"),
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values, { resetForm }) => {
      signInHandler(values, resetForm);
    },
    validationSchema: validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <form onSubmit={formik?.handleSubmit}>
            <Field
              label="Email Address"
              name="Email"
              as={FormInput}
              type="text"             
            />
            <Field
              label="Password"
              name="Password"
              as={FormInput}
              type="password" 
            />
            <p className={styles.para1}>Forgot Password?</p>
            <Button
              text={loginMutation?.isLoading ? "Sign in..." : "SIGN IN"}
              className={styles.button}
              disabled={loginMutation?.isLoading}
            />
            {/* <Buttons text={loginMutation?.isLoading ? 'Sign in...' : 'SIGN IN'} className={styles.btn} disabled={loginMutation?.isLoading} /> */}

            {/* {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>} */}
            <p className={styles.para}>
              Don’t have an account?
              <Link to="/create-account" className={styles.span}>
                SIGN UP
              </Link>
            </p>
          </form>
        </section>
      </main>
    </FormikProvider>
    // <main className={styles.main}>
    // 	<section className={styles.inputSection}>
    // 	<form
    // 	onSubmit={handleSubmit}
    // 	>

    // 		<Input placeholder='Email' type='email' name='Email' onChange={handleEmail} value={EmailAddress} />
    // 		<Input placeholder='Password' type='password' name='Password' onChange={handlePassword} value={Password} />
    // 		<p className={styles.para1}>Forgot Password?</p>
    // 		<Button text={isLoading ? 'Sign in...' : 'SIGN IN'} className={styles.btn} disabled={isLoading} />
    // 		{error && <p className='error'>{error}</p>}
    // 		{successMessage && <p className='success'>{successMessage}</p>}
    // 		<p className={styles.para}>
    // 			Don’t have an account?
    // 			<Link to='/create-account' className={styles.span}>
    // 				SIGN UP
    // 			</Link>
    // 		</p>
    // 	</form>
    // </section>

    // </main>
  );
};

export default Login;
