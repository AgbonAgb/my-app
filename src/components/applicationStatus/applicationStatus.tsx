import styles from './main.module.scss';
import Button from "../../custom/button/styledButton/styledButton";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../providers/store";
import { useDispatch, useSelector } from "react-redux";
import { FormWrapper } from '../users/editModal';
import { styled } from '@mui/system';

const ApplicationStatus = () => {


  let sec = 3
  return (
      <main className={styles.main}>
        <section className={styles.inputSection}>
            <FormWrapper>
            {/* {options &&
                  options.length > 0 &&
                  options.map((data, index) => (
                    <div>
                        <p>{data?.id}</p>
                        <GreenLine></GreenLine>

                    </div>
                    

                  ))} */}
                <div>
                    <Para>SUBMITTED</Para>
                    <Para1>12th September, 2023</Para1><Para2>  12.02pm</Para2>
                    <GreenLine></GreenLine>
                </div>
                <div>
                    <Para>PROCESSING</Para>
                    <Para1>12th September, 2023</Para1><Para2>  12.02pm</Para2>
                  
                    {sec >= 2  ?
                  <GreenLine></GreenLine> : <WhiteLine></WhiteLine>}
                </div>
                <div>
                    <Para>APPROVED</Para>
                    <Para1>12th September, 2023  </Para1><Para2>  12.02pm</Para2>

                    {sec == 3 ?
                    <GreenLine></GreenLine> :<WhiteLine></WhiteLine>}
                </div> 



            </FormWrapper>

            
            <div className={styles.main}>
            <Button
              text={
                // applicationMutation?.isLoading ? "Sign in..." :
               "REGISTER COURSES"}
              className={styles.button}
            //   disabled={applicationMutation?.isLoading}
            />

            </div>
        </section>
      </main>

  );
};

export default ApplicationStatus;
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
    font-weight: 700;
    font-size: 1.6rem;
    color: #000000;
    padding-inline-start : 1rem;
    padding-block-end: 1rem;
`
export const Para1 = styled('span')`
    font-weight: 400;
    font-size: 1.6rem;
    color: #000000;
    
`
export const Para2= styled('span')`
    // font-weight: 400;
    font-size: 1.6rem;
    color: #959AA4    ;
    
`
export const GreenLine = styled('div')`
width: 26.4rem;
height: 0.8rem;
border-radius: 2rem;
background-color: #39A430;
border: solid #39A430 1px;
`
export const WhiteLine = styled('div')`
width: 26.4rem;
height: 0.8rem;
border-radius: 2rem;
background-color: #D9D9D9;
border: solid #D9D9D9
1px;
`