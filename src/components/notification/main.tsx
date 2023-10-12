import styles from './main.module.scss';
import { styled } from '@mui/system';
import{ReactComponent as ProcessIcon} from "../../svgs/processIcon.svg"
import{ReactComponent as CancelIcon} from "../../svgs/cancel.svg"
import{ReactComponent as Approved} from "../../svgs/Approved.svg"



const ApplicationStatus = () => {

  interface Course {
    id: number;
    code: string;
    unit: string;
    lecturer: string;
  }

    const options: Course[] = [
    {
      id: 1,
      code: "Your application is being processed",
      unit: "12th September, 2023",
      lecturer: "12.02pm",
    },
    {
      id: 2,
      code: "Your application is being Approved",
      unit: "12th September, 2023",
      lecturer: "12.02pm",
    },
    {
      id: 3,
      code: "Your application is being Rejected",
      unit: "12th September, 2023",
      lecturer: "12.02pm",
    },

    

  ];

  return (
      <main className={styles.main}>
        <section className={styles.inputSection}>
            {options &&
                  options.length > 0 &&
                  options.map((data, index) => (
                    <div key={data?.id} className={styles.span}>
                      <div>
                      {data?.code?.toLowerCase().includes("approved") ?
                      <Approved/> : data?.code?.toLowerCase().includes("rejected") ? <CancelIcon/> : <ProcessIcon/>
                      }
                      </div>
                      {/* <div>
                      <ProcessIcon/>
                      </div> */}
                      <div>
                        
                      <Para>{data?.code}</Para>
                    <Para1>{data?.unit}</Para1><Para2>{"  "}{data?.lecturer}</Para2>

                      </div>
                      

                      
                   
                </div>
                  ))}
                {/* <div>
                    <Para>Your application is being processed.</Para>
                    <Para1>12th September, 2023</Para1><Para2>  12.02pm</Para2>
                </div> */}
             
             




            
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