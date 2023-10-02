import { ChangeEvent, FormEvent, MouseEvent, useState, Fragment, useContext } from "react";
import styles from "./index.module.scss";
import Input from "../../../custom/input/input";
import Button from "../../../custom/button/styledButton/styledButton";
import { request } from "../../utils/apiCall";
import { Link, useNavigate } from "react-router-dom";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import FormInput from "../../../custom/input/formInput";
import * as Yup from "yup";
import apiCall2 from "../../utils/apiCall2";
import { useMutation } from "@tanstack/react-query";
import { NotificationContext } from "../../../providers/Notification";

interface Person {
  name: string;
}

interface LoginPayload {
	firstName: string,
	lastName: string,
	phone: string,
	userType: string,
    userName: string,
	email: string,
	password: string,
  }

const Form = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // const [firstName, setFirsName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState(""); //Value and action
  //setEmail
  const [EmailAddress, setEmail] = useState(""); //Value and action
  //setPassword
  const [Password, setPassword] = useState(""); //Value and action
  //setConfirmPassword
  const [ConfirmPassword, setConfirmPassword] = useState(""); //Value and action

//   //Generic
//   const [person, setPerson] = useState({
//     firstName: "",
//     lastName: "",
//   });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const user = {
//       firstName: person.firstName,
//       lastName: person.lastName,
//       userType: "Applicant",
//       userName: `${person.firstName}${person.lastName}`,
//       email: EmailAddress,
//       password: Password,
//     };

//     setIsLoading(true);
//     setError("");
//     setSuccessMessage("");

//     try {
//       (await request.post("/Authentication/RegisterUser", user)) as Person;

//       setSuccessMessage("User has been successfully registered");
//     } catch (error: any) {
//       setError(error?.response?.data?.message ?? error?.mesage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   //generic
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;

//     setPerson((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   //Individual
//   // const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
//   // 	const { value } = e.target;
//   // 	setFirsName(value);
//   // };

//   // const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
//   // 	const { value } = e.target;
//   // 	setLastName(value);
//   // };

//   const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setPhoneNumber(value);
//   };

//   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setEmail(value);
//   };
//   //handlePassword
//   const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setPassword(value);
//   };

//   //handleConfirmPassword
//   const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setConfirmPassword(value);
//   };


const SignUp = async (payload: LoginPayload) => {
    return (await apiCall2().post("/Authentication/RegisterUser", payload))
      ?.data as any;
  };
  const SignUpMutation = useMutation(["signUp"], SignUp, { retry: 0 });

  const signUpHandler = async (values: FormikValues, resetForm: () => void) => {
    const loginPayload: LoginPayload = {
	  firstName: values.firstName.trim(),
	  lastName: values.lastName.trim(),
	  phone: values.phone.trim(),
	  userType:"Applicant",
	  userName: values.firstName.trim()+values.lastName.trim(),
	  email: values.email.trim(),
	  password: values.password.trim(),
    };
    try {
      await SignUpMutation.mutateAsync(loginPayload, {
        onSuccess: (errors) => {
          console.log(errors, "data");

          showNotification({
            message: "Registration Success",
            type: "success",
          });
          navigate("/login");

         
        },
      });
    } catch (error: any) {
		console.log(error?.message, "me")
      showNotification({
        message:error?.response?.data?.title ?? error?.mesage,
        type: "error",
      });
    }
  };




  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email Address is required")
      .email("Invalid email Address"),
	lastName: Yup.string().required("last name is required"),
	firstName: Yup.string().required("first name is required"),
	phone: Yup.string().required("phone is required"),
	password: Yup.string().required("Password is required"),
	confirmPassword: Yup.string()
	.required("Confirm password is required")
	.oneOf([Yup.ref("password")], "Passwords must match")
	.required("Confirm password is required"),

  });


  const formik = useFormik<FormikValues>({
    initialValues: {
      phone:"",
	  firstName: "",
      lastName: "",
      userType: "Applicant",
      email: "",
      password: "",
	  confirmPassword:""
    },
    onSubmit: (values, { resetForm }) => {
		signUpHandler(values, resetForm);
    },
    validationSchema: validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <form onSubmit={formik?.handleSubmit}>
            <Field
              label="Last Name"
              name="lastName"
              as={FormInput}
              type="text"
            />
			<Field
              label="First Name"
              name="firstName"
              as={FormInput}
              type="text"
            />
			<Field
              label="Phone Number"
              name="phone"
              as={FormInput}
              type="text"
            />
			<Field
              label="Email Address"
              name="email"
              as={FormInput}
              type="text"
            />
            <Field
              label="Password"
              name="password"
              as={FormInput}
              type="password"
            />
		      <Field
              label="Confirm Password"
              name="confirmPassword"
              as={FormInput}
              type="password"
            />
            <Button
              text={SignUpMutation?.isLoading ? "Sign up..." : "SIGN Up"}
              className={styles.button}
              disabled={SignUpMutation?.isLoading}
            />
            {/* <Buttons text={loginMutation?.isLoading ? 'Sign in...' : 'SIGN IN'} className={styles.btn} disabled={loginMutation?.isLoading} /> */}

            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <p className={styles.para}>
			Already have an account?
              <Link to="/login" className={styles.span}>
                SIGN IN
              </Link>
            </p>
          </form>
        </section>
      </main>
    </FormikProvider>
    // <Fragment>
    // 	<main className={styles.main}>
    // 	<form className={styles.form} onSubmit={handleSubmit}>
    // 		<section className={styles.inputSection}>
    // 			<Input
    // 				placeholder='First Name'
    // 				type='text'
    // 				name='firstName'
    // 				onChange={handleChange}
    // 				value={person.firstName}
    // 			/>
    // 			<Input placeholder='Last Name' type='text' name='lastName' onChange={handleChange} value={person.lastName} />
    // 			{/* <Input placeholder='First Name' type='text' name='firstName' onChange={handleFirstName} value={firstName} />
    // 		<Input placeholder='Last Name' type='text' name='lastName' onChange={handleLastName} value={lastName} /> */}
    // 			<Input placeholder='Phone Number' type='text' name='PhoneNumber' onChange={handlePhone} value={PhoneNumber} />
    // 			<Input
    // 				placeholder='Email Address'
    // 				type='email' name='EmailAddress' onChange={handleEmail} value={EmailAddress}
    // 			/>
    // 			<Input placeholder='Password' type='password' name='Password' onChange={handlePassword} value={Password} />
    // 			<Input
    // 				placeholder='Confirm Password'
    // 				type='password'
    // 				name='ConfirmPassword'
    // 				onChange={handleConfirmPassword}
    // 				value={ConfirmPassword}
    // 			/>
    // 		</section>
    // 		<Button text={isLoading ? 'Sign up...' : 'SIGN UP'} className={styles.btn} disabled={isLoading} />
    // 		{error && <p className='error'>{error}</p>}
    // 		{successMessage && <p className='success'>{successMessage}</p>}
    // 		<p className={styles.para}>
    // 			Already have an account?
    // 			<Link to='/login' className={styles.span}>
    // 				SIGN IN
    // 			</Link>
    // 		</p>
    // 	</form>

    // 	</main>

    // </Fragment>
  );
};

export default Form;
