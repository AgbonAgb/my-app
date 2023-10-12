import styles from './main.module.scss';
import { styled } from '@mui/system';
import{ReactComponent as Ellipse} from "../../svgs/Ellipse 15.svg"
import{ReactComponent as CancelIcon} from "../../svgs/cancel.svg"
import{ReactComponent as Approved} from "../../svgs/Approved.svg"



const Profile = () => {


  return (
      <main className={styles.main}>
        <section className={styles.inputSection}>

            <div>
            <Ellipse />
              <div className={styles.circle}>
              <p>65%</p>
              </div>

            </div>

          
       
             
             




            
            {/* <div className={styles.main}>
            <Button
              text={
                // applicationMutation?.isLoading ? "Sign in..." :
               "REGISTER COURSES"}
              className={styles.button}
            //   disabled={applicationMutation?.isLoading}
            />

            </div> */}
        </section>
      </main>

  );
};

export default Profile;
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
    font-weight: 500;
    font-size: 2rem;
    color: #000000;
    padding-block-end: 1rem;
    line-height :2.438rem
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