import { styled } from "@mui/material";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Button from "../../custom/button/button";
import Input from "../../custom/input/input";
import styles from "./edit.module.scss"
import FormInput from "../../custom/input/formInput";
import { User, Users } from "./type";
// import { useSelector } from "react-redux";
// import { RootState } from "../../providers/store";
import apiCall2 from "../../utils/apiCall2";
// import { useMutation } from "@tanstack/react-query";
//import { NotificationContext } from ".././providers/Notification";
import { NotificationContext } from '../../providers/Notification';
import { useContext } from "react";
import * as Yup from "yup";
interface Props {
  user: User;
  handleCloseEditModal: () => void;


}

interface EditPayload {
  FirstName: string;
  LastName: string;
  UserType: string;
  UserName: string;
  Email: string;
  Password: string;
  UserRole: string;
  phone: string;
}

const EditUser = ({ handleCloseEditModal, user }: Props) => {


  const { showNotification } = useContext(NotificationContext);




  const EditHandler = async (values: FormikValues, resetForm: () => void) => {
    const loginPayload: EditPayload = {
      FirstName: values.firstName.trim(),
      LastName: values.lastName.trim(),
      UserType: "Applicant",
      UserName: values.firstName.trim() + values.lastName.trim(),
      Email: values.email.trim(),
      Password: values.password.trim(),
      UserRole: values?.userRole.trim(),
      phone: values.phone.trim()
    };
    try {
      // await EditMutation.mutateAsync(loginPayload, {
      // onSuccess: () => {
      //   showNotification({
      //   message: "Updated SuccessFully",
      //   type: "success",
      //   });
      //   handleCloseEditModal()      
      //   },
      // });
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
    userRole: Yup.string().required("user role is required"),
    password: Yup.string().required("Password is required"),
    // userName:Yup.string().required("Password is required"),
    // userType:Yup.string().required("Password is required"),
    phone: Yup.string().required("phone is required"),

  });



  const formik = useFormik<FormikValues>({
    initialValues: {
      userRole: "",
      firstName: "",
      lastName: "",
      userType: "Applicant",
      userName: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      EditHandler(values, resetForm);
    },
    validationSchema: validationSchema,
  });


  return (
    <>
      <div className={styles.headingMain}>
        <p className={styles.headerStyle}>Edit User </p>
      </div>
      <FormikProvider value={formik}>
        <section className={styles.inputSection}>
          <form onSubmit={formik?.handleSubmit}>

            <FormWrapper>
              <Field
                label="Email"
                name="email"
                as={FormInput}
                type="text"
                className={styles.width}
              />
              <Field
                label="First Name"
                name="firstName"
                as={FormInput}
                type="text"
                className={styles.width}
              />

            </FormWrapper>
            <FormWrapper>
              <Field
                label="Last Name"
                name="lastName"
                as={FormInput}
                type="text"
                className={styles.width}
              />
              <Field
                label="Phone Number"
                name="phone"
                as={FormInput}
                type="text"
                className={styles.width}
              />

            </FormWrapper>
            <FormWrapper>
              <Field
                label="Role Name"
                name="userRole"
                as={FormInput}
                type="text"
                className={styles.width}
              />
              <Field
                label="Password"
                name="password"
                as={FormInput}
                type="text"
                className={styles.width}
              />
            </FormWrapper>



            <div className={styles.main}>
              <ButtonContainer>
                <Button
                  text="Cancel"
                  className={styles.button}
                  onClick={handleCloseEditModal}
                />
                <Button
                  text="Edit"
                  className={styles.button}
                  onClick={() => { formik?.handleSubmit() }}
                />
              </ButtonContainer>
            </div>



          </form>
        </section>
      </FormikProvider>
    </>

  )
};

export default EditUser;


const ButtonContainer = styled('div')`
    display: flex;
    gap: 2rem;
`



export const FormWrapper = styled('div')`
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 1024px){
        display: block;
    }
    `