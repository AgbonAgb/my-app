import {useContext} from "react";
import styles from "./index.module.scss";
import Button from "../../../custom/button/styledButton/styledButton";
import { Link, useNavigate } from "react-router-dom";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import FormInput from "../../../custom/input/formInput";
import * as Yup from "yup";
import apiCall2 from "../../../utils/apiCall2";
import { useMutation } from "@tanstack/react-query";
import { NotificationContext } from "../../../providers/Notification";


interface SignUpPayload {
  firstName: string;
  lastName: string;
  phone: string;
  userType: string;
  userName: string;
  email: string;
  password: string;
}

const Form = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();


  const SignUp = async (payload: SignUpPayload) => {
    return (await apiCall2().post("/Authentication/RegisterUser", payload))
      ?.data as any;
  };
  const SignUpMutation = useMutation(["signUp"], SignUp, { retry: 0 });

  const signUpHandler = async (values: FormikValues, resetForm: () => void) => {
    const loginPayload: SignUpPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      phone: values.phone.trim(),
      userType: "Applicant",
      userName: values.firstName.trim() + values.lastName.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    try {
      await SignUpMutation.mutateAsync(loginPayload, {
        onSuccess: () => {
          showNotification({
            message: "Registration Success",
            type: "success",
          });
          navigate("/login");
        },
      });
    } catch (error: any) {
      showNotification({
        message: error?.response?.data?.title ?? error?.mesage,
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
      phone: "",
      firstName: "",
      lastName: "",
      userType: "Applicant",
      email: "",
      password: "",
      confirmPassword: "",
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
   
  );
};

export default Form;
