import styles from './main.module.scss';
import Select from "../../custom/input/select";
import Button from "../../custom/button/styledButton/styledButton";
import { Link } from "react-router-dom";
import {useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import apiCall2 from "../../utils/apiCall2";
import { useMutation } from "@tanstack/react-query";
import { NotificationContext } from "../../providers/Notification";
import { AppDispatch, RootState } from "../../providers/store";
import { useDispatch, useSelector } from "react-redux";
import userDetails, { updateUserAuth } from "../../reduxSlice/useAuthSlice";
import * as Yup from "yup";
import { FormWrapper } from '../users/editModal';
import { styled } from '@mui/system';
import { ReactComponent as UploadFile } from '../../../src/svgs/uploadFile.svg';
import CustomModal from '../../custom/modal/customModal';
import PaymentModal from './modal/paymentModal';

interface LoginPayload {
  school: string,
  faculty: string,
  department:string,
  course:string,
  session:string,
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [file,setFile] =useState<File | null>(null)
  const [fileName,setfileName] = useState("")
  const [fileSize,setFileSize] = useState(0)
  const sessionDetails = useSelector((state: RootState) => state?.useAuthSlice?.userDetails)
  const [openEditModal, setOpenEditModal] = useState(false)

  const { showNotification } = useContext(NotificationContext);


  const applicationApi = async (payload: LoginPayload) => {
    return (await apiCall2().post("/Authentication/Application", payload))
      ?.data as any;
  };
  const applicationMutation = useMutation(["applicationApi"], applicationApi, { retry: 0 });

  const applicationHandler = async (values: FormikValues, resetForm: () => void) => {
    const loginPayload: LoginPayload = {
      school:  values.school.trim(),
      faculty:  values.faculty.trim(),
      department: values.department.trim(),
      course: values.course.trim(),
      session: values.session.trim(),
    };
    try {
      await applicationMutation.mutateAsync(loginPayload, {
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

  const handleCloseEditModal = ()=>{
    setOpenEditModal(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setfileName(e.target?.files[0]?.name);
    setFileSize(e.target.files[0]?.size);
    setFile(e.target.files[0]);
  };


  const validationSchema = Yup.object().shape({
      school: Yup.string().required("school is required"),
      faculty: Yup.string().required("faculty is required"),
      department: Yup.string().required("department is required"),
      course: Yup.string().required("course is required"),
      session: Yup.string().required("session is required"),
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      school: "",
      faculty: "",
      department:"",
      course:"",
      session:"",
    },
    onSubmit: (values, { resetForm }) => {
      applicationHandler(values, resetForm);
    },
    validationSchema: validationSchema,
  });
  const onSubmit=()=>{
    formik?.handleSubmit()
    setOpenEditModal(true)

  }

  return (
    <FormikProvider value={formik}>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <form onSubmit={formik?.handleSubmit}>
            <Field
              label="SCHOOL"
              name="school"
              as={Select}
              type="text"    
              className={styles.width}         
            />
            <Field
              label="FACULTY"
              name="faculty"
              as={Select}
              type="password" 
              className={styles.width}         

            />
            <Field
              label="DEPARTMENT"
              name="department"
              as={Select}
              type="text"    
              className={styles.width}         
            />
              <Field
              label="COURSE OF STUDY"
              name="course"
              as={Select}
              type="text"    
              className={styles.width}         
            />
         
            <Field
              label="SESSION"
              name="session"
              as={Select}
              type="password" 
              className={styles.width}         

            />
               <Label>
            Upload Certificate
          </Label>
               <UplaodWrapper>
               {file ? <UploadFile /> : <UploadFile />}
              <Field
              type="file"
              name="filename"
              onChange={handleFileUpload}
              accept=".pdf,.doc, .png, .jpg, .jpeg"
              hidden
            />

             <Para>
              {fileName === "" ? "Select a file to upload" : fileName}
            </Para>
            <Para>
              {fileName === ""
                ? "max:1mb (png, jpg, docx, pdf)"
                : `${Math.floor(fileSize / 1024)}kb`}
            </Para>
            <Para>{fileName === "" ? "" : "change"}</Para>


              </UplaodWrapper>
            <FormWrapper>            
            <Button
              text={applicationMutation?.isLoading ? "Sign in..." : "SAVE & EXIT"}
              className={styles.button}
              disabled={applicationMutation?.isLoading}
            />
             <Button
              text={applicationMutation?.isLoading ? "Sign in..." : "PROCEED TO PAYMENT"}
              className={styles.button}
              disabled={applicationMutation?.isLoading}
              onClick={onSubmit}
            />
            </FormWrapper>

          </form>
          <CustomModal
            maxWidth="md"
            open={openEditModal}
            Content={<PaymentModal  amount={200}
            // />}
              handleCloseEditModal={handleCloseEditModal} />}
          />
        </section>
      </main>
    </FormikProvider>

  );
};

export default Login;
export const Label = styled('p')`
    flex: 1 1 100%;
    color: var(--color-black-default);
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    letter-spacing: 00.2rem;
    text-transform: capitalize;
    padding-top: 2.8rem;
    padding-bottom: 0.7rem;
`

const UplaodWrapper = styled("label")`
cursor: pointer;
display: flex;
flex-direction: column;
margin-block: 2rem;
justify-content: center;
align-items: center;
border: 2px dashed #4caf4f;
border-radius: 1rem;
padding-block: 2rem;
`;

export const Para = styled('p')`
    text-align: center;
    margin-block-start: 2rem;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.6rem;
    color: #000000;
`