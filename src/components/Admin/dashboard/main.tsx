import styles from "./main.module.scss";
import { styled } from "@mui/system";
import { ReactComponent as Profile1 } from "../../../svgs/profile1 (1).svg";
import { ReactComponent as Profile2 } from "../../../svgs/profile2 (2).svg";
import { ReactComponent as TotalApplicants } from "../../../svgs/totalIcon.svg";
import { BarChart } from '@mui/x-charts/BarChart';
import { Button } from "@mui/material";
import { ReactComponent as ArrowRight } from "../../../svgs/arrow_forward.svg"

// import Button from "../../../custom/button/styledButton/styledButton";
const Profile = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          {/* <div className={styles.wrapper}>
            <div className={styles.circleSection}>
              <Ellipse />
            </div>
            <div className={styles.reg}>
              <div className={styles.card}>
                <p>
                  Complete your application & get approved to allow you register
                  courses for the semester.
                </p>
                <p style={{ paddingBlockStart: "2rem" }}>
                  Deadline: 15th August 2023
                </p>
              </div>

             
            </div>
          </div> */}
          {/* import * as React from 'react';


export default function SimpleCharts() {
  return ( */}
    {/* <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['jan', 'feb', 'mar', "apr", "may", 'june'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [250, 500, 750, 1000],
        },
      ]}
      width={500}
      height={300}
    /> */}
  


        </section>
      </main>

      <section className={styles.main } style={{marginBlockStart:"2rem"}}>
        <div className={styles.wrapper}>
          {/* <div className={styles.rec2}>
            <div className={styles.card}>
              <p className={styles.app}>Applicant Status</p>
        
            <div className={styles.status}>
              <div className={styles.span}>
                <Profile1/>
               
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>

                    </div>
                 
              </div>
              <div className={styles.span}>
                <Profile1/>     
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                    </div>        
              </div>
            </div>
            <div className={styles.status}>
              <div className={styles.span}>
                <Profile1/>
               
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>

                    </div>
                 
              </div>
              <div className={styles.span}>
                <Profile1/>     
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                    </div>        
              </div>
            </div>
            </div>




         
          </div> */}
             <div className={styles.rec2} >
            <div className={styles.card}>
            <p className={styles.app}>Applicant Status</p>

            <div className={styles.status}>
              <div className={styles.span}>
                <Profile1/>
               
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>

                    </div>
                 
              </div>
              <div className={styles.span}>
                <Profile1/>     
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                    </div>        
              </div>
            </div>
            <div className={styles.status}>
              <div className={styles.span}>
                <Profile1/>
               
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>

                    </div>
                 
              </div>
              <div className={styles.span}>
                <Profile1/>     
                    <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                    </div>        
              </div>
            </div>
              {/* <p>
                Complete your application & get approved to allow you register
                courses for the semester.
              </p>
              <p style={{ paddingBlockStart: "2rem" }}>
                Deadline: 15th August 2023
              </p> */}
            </div>
         

          </div>

          <div className={styles.rec2} >
            <div className={styles.card}>
              <p className={styles.app}>Applications Pending Approval
              </p>
              <div className={styles.circleSection}>
                <div>
                <TotalApplicants />
                {/* <div className={styles.circle}> */}
                <p >sjsk</p>
                {/* </div> */}

                </div>
                <span  className={styles.button} >
                {/* className={styles.button} */}
                <span >View Application </span>
                <ArrowRight  className={styles.backicon} /> 

                </span>
                
               

              {/* <p>jdjdjj</p> */}
              {/* <section className={styles.main}> */}
                {/* <Button text="PROCEED TO PAYMENT"  className={styles.button} /> */}
              {/* </section> */}
              {/* <Button className={styles.button}   endIcon={<ArrowRight className={styles.backicon} />} > PROCEED TO PAYMENT </Button> */}



              </div>
            </div>
           

         
          </div>
        </div>
      </section>


    </>
  );
};

export default Profile;
export const Label = styled("p")`
  flex: 1 1 100%;
  color: var(--color-black-default);
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  letter-spacing: 00.2rem;
  text-transform: capitalize;
  padding-top: 2.8rem;
  padding-bottom: 0.7rem;
`;

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
    // padding-block-end: 4rem;
    line-height :2.438rem
`;
export const Para1 = styled("span")`
  font-weight: 400;
  font-size: 1.6rem;
  color: #959aa4;
`;
export const Para2 = styled("span")`
  // font-weight: 400;
  font-size: 1.6rem;
  color: #959aa4;
`;
export const GreenLine = styled("div")`
  width: 26.4rem;
  height: 0.8rem;
  border-radius: 2rem;
  background-color: #39a430;
  border: solid #39a430 1px;
`;
export const WhiteLine = styled("div")`
  width: 26.4rem;
  height: 0.8rem;
  border-radius: 2rem;
  background-color: #d9d9d9;
  border: solid #d9d9d9 1px;
`;