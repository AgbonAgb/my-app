import styles from "../login/login.module.scss";
import FormInput from "../../custom/input/formInput";
import Button from "../../custom/button/styledButton/styledButton";
import { Link } from "react-router-dom";
import {useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import apiCall2 from "../../utils/apiCall2";
import { useMutation } from "@tanstack/react-query";
import { NotificationContext } from "../../providers/Notification";
import { AppDispatch, RootState } from "../../providers/store";
import { useDispatch, useSelector } from "react-redux";
import userDetails, { updateUserAuth } from "../../reduxSlice/useAuthSlice";
import * as Yup from "yup";

interface LoginPayload {
  Email: string;
  Password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const sessionDetails = useSelector((state: RootState) => state?.useAuthSlice?.userDetails)

  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
  	if (sessionDetails?.Token) {
  		navigate('/course-registration');
  	}
  }, [sessionDetails?.Token]);





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
        onSuccess: (data:any) => {
          console.log(data, "data");

          showNotification({
            message: "User Log in successful",
            type: "success",
          });
          navigate("/course-registration");

          dispatch(
            updateUserAuth({...sessionDetails,
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
              className={styles.width}         
            />
            <Field
              label="Password"
              name="Password"
              as={FormInput}
              type="password" 
              className={styles.width}         

            />
            <p className={styles.para1}>Forgot Password?</p>
            <Button
              text={loginMutation?.isLoading ? "Sign in..." : "SIGN IN"}
              className={styles.button}
              disabled={loginMutation?.isLoading}
            />

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

  );
};

export default Login;
