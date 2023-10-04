import { styled } from "@mui/material";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Button from "../../custom/button/button";
import Input from "../../custom/input/input";
import styles from "./edit.module.scss"
import FormInput from "../../custom/input/formInput";
import { User, Users } from "./type";

interface Props {
	user: User;
	handleCloseEditModal: () => void;
  

}
const EditUser = ({handleCloseEditModal,user}: Props ) => {
    const formik = useFormik<FormikValues>({
        initialValues: {
          Email:user?.FirstName,
          lastName:user?.LastName,
          phone:user?.PhoneNumber,
          roleName:user?.RoleName


        },
        onSubmit: () => {

        }
    })

    return (
      <>
      	<div className={styles.headingMain}>
					<p className={styles.headerStyle}>Edit User </p>
				</div>
        <FormikProvider value={formik}>
        {/* <main className={styles.main}> */}
          <section className={styles.inputSection}>
            <form onSubmit={formik?.handleSubmit}>
               <Field
                label="First Name"
                name="Email"
                as={FormInput}
                type="text"  
                className={styles.width}  
                width="20rem"  
              />
               <Field
                label="Last Name"
                name="lastName"
                as={FormInput}
                type="text"  
                width="20rem"  
              />
                 <Field
                label="Phone Number"
                name="phone"
                as={FormInput}
                type="text"    
                width="20rem"  
              />
              <Field
                label="Role Name"
                name="roleName"
                as={FormInput}
                type="text" 
                width="20rem"    
              />
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
              />
                    </ButtonContainer>
              </div>

             

            </form>
          </section>
        {/* </main> */}
      </FormikProvider>
      </>

    )
};

export default EditUser;

const FormWrapper = styled('div')`
    margin-inline: 3.5rem;
`

const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin-block: 2.5rem;
    padding-inline: 3.5rem;
`

const ButtonContainer = styled('div')`
    display: flex;
    gap: 2rem;
`

const StyledButton = styled(Button)`
    padding-block: 1rem;
    padding-inline: 2rem;
`

