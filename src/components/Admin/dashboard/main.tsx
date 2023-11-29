import styles from "./main.module.scss";
import { styled } from "@mui/system";
import { ReactComponent as Profile1 } from "../../../svgs/profile1 (1).svg";
import { ReactComponent as Profile2 } from "../../../svgs/profile2 (2).svg";
import { ReactComponent as TotalApplicants } from "../../../svgs/totalIcon.svg";
// import { BarChart } from "@mui/x-charts/BarChart";

import { Button } from "@mui/material";
import { ReactComponent as ArrowRight } from "../../../svgs/arrow_forward.svg";
import { ResponsiveChartContainer, BarChart, useDrawingArea, useYScale, useXScale ,LinePlot} from '@mui/x-charts';




const Profile = () => {
  
 

  const customColorPalette = ["#2C19B2", "yellow", "black", "gold", "green"];

  return (
    <>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <Para1 style={{ paddingInlineStart: "2rem" }}>
            Applicants Overview
          </Para1>
          <p className={styles.app}>Total Applicants</p>

          <div className={styles.main}>
       
            <section className={styles.chart}>
               <BarChart
            
           
                xAxis={[
                  {
                    id: "barCategories",
                    data: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    scaleType: "band",
                    
                  },
                ]}
                
                series={[
                  
                  {
                    data: [
                      1000, 500, 3, 12, 100, 700, 480, 230, 750, 800, 900, 950,
                    ],
                  },
                ]}
                
                max-width={500}
                height={300}
                colors={customColorPalette}
            
          
                //  className={styles.chrt}
              />
            </section>
            
          </div>
        </section>
      </main>

      <section className={styles.main} style={{ marginBlockStart: "2rem" }}>
        <div className={styles.wrapper}>
          <div className={styles.rec2}>
            <div className={styles.card}>
              <p className={styles.app}>Applicant Status</p>

              <div className={styles.status}>
                <div className={styles.span}>
                  <Profile1 />

                  <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                  </div>
                </div>
                <div className={styles.span}>
                  <Profile1 />
                  <div>
                    <Para1>dkdk</Para1>
                    <Para>djdjsjdjdj</Para>
                  </div>
                </div>
              </div>
              <div className={styles.status}>
                <div className={styles.span}>
                  <Profile1 />

                  <div>
                    <Para1>incompleted</Para1>
                    <Para>2500</Para>
                  </div>
                </div>
                <div className={styles.span}>
                  <Profile1 />
                  <div>
                    <Para1>ongoing</Para1>
                    <Para>3500</Para>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rec2}>
            <div className={styles.card}>
              <p className={styles.app}>Applications Pending Approval</p>
              <div className={styles.circleSection}>
                <div className={styles.guide}>
                  <TotalApplicants className={styles.ellipse} />

                  <p className={styles.circle}>65%</p>
                </div>

                <span className={styles.button}>
                  <span>View Application </span>
                  <ArrowRight className={styles.backicon} />
                </span>
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

export const Para = styled("p")`
  font-weight: 500;
  font-size: 2rem;
  color: #000000;
  // padding-block-end: 4rem;
  line-height: 2.438rem;
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


// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Paper from '@material-ui/core/Paper';

// const data = [
//   { name: 'Category A', value: 10 },
//   { name: 'Category B', value: 20 },
//   { name: 'Category C', value: 15 },
//   // Add more data points as needed
// ];

// // const useStyles = makeStyles((theme) => ({
// //   paper: {
// //     padding: theme.spacing(2),
// //   },
// // }));

// // const BarChartWithGrid = () => {
// //   // const classes = useStyles();

// //   return (
    // <div >
    //   <ResponsiveContainer width="100%" height={400}>
    //     <BarChart data={data}>
    //       <XAxis dataKey="name" />
    //       <YAxis />
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <Tooltip />
    //       <Legend />
    //       <Bar dataKey="value" fill="#8884d8" />
    //     </BarChart>
    //   </ResponsiveContainer>
    // </div>
// //   );
// // };

// // export default BarChartWithGrid;
