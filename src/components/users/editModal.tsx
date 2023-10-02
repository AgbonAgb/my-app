import { styled } from "@mui/material";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Button from "../../custom/button/button";
import Input from "../../custom/input/input";


interface Props {
	// users: Users;
	handleCloseEditModal: () => void;

}
const EditUser = ({handleCloseEditModal}: Props) => {
    const formik = useFormik<FormikValues>({
        initialValues: {

        },
        onSubmit: () => {

        }
    })

    return (
        <FormikProvider value={formik}>
            <form>
                <FormWrapper>
                    <Field 
                        name='name'
                        type='text'
                        as={Input}
                        label='First Name'
                        placeholder='Name'
                    />
                      <Field 
                        name='name'
                        type='text'
                        as={Input}
                        label='Last Name'
                        placeholder='Name'
                    />
                     <Field 
                        name='name'
                        type='text'
                        as={Input}
                        label='Phone Number'
                        placeholder='Name'
                    />
                     <Field 
                        name='name'
                        type='text'
                        as={Input}
                        label='Role'
                        placeholder='Name'
                    />
                    
                </FormWrapper>
                <ButtonWrapper>
                    <ButtonContainer>
                        <Button onClick={handleCloseEditModal} text='Cancel'/>
                        <Button type="submit" text='Edit'/>
                    </ButtonContainer>
                </ButtonWrapper>
            </form>
        </FormikProvider>
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

