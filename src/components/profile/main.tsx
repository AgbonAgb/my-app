import styles from "./main.module.scss";
import { styled } from "@mui/system";
import { ReactComponent as Ellipse } from "../../svgs/circle.svg";
import { ReactComponent as Test } from "../../svgs/test.svg";
import { ReactComponent as Approved } from "../../svgs/Approved.svg";
import { FormWrapper } from "../users/editModal";
import Button from "../../custom/button/styledButton/styledButton";

const Profile = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.inputSection}>
          <div className={styles.wrapper} style={{gap:"6rem"}}>
            <div className={styles.guide}>
              <Ellipse/>
              {/* <Test  /> */}
              <p className={styles.circle}>65%</p>
            </div>
            <div >
<div className={styles.card}>
  <p>
    Complete your application & get approved to allow you register
    courses for the semester.
  </p>
  <p style={{ paddingBlockStart: "2rem" }}>
    Deadline: 15th August 2023
  </p>
</div>

              <section className={styles.main}>
                <Button text="PROCEED TO PAYMENT" className={styles.button} />
              </section>
            </div>
          </div>
        </section>
      </main>

      <section className={styles.main } style={{marginBlockStart:"2rem"}}>
        <div className={styles.wrapper}>
          <div className={styles.rec}>
            <div className={styles.card}>
              <p>
                Complete your application & get approved to allow you register
                courses for the semester.
              </p>
              <p style={{ paddingBlockStart: "2rem" }}>
                Deadline: 15th August 2023
              </p>
            </div>
            <section className={styles.main}>
                <Button text="PROCEED TO PAYMENT" className={styles.button} />
              </section>

          </div>

          <div className={styles.rec} >
            <div className={styles.card}>
              <p>
                Complete your application & get approved to allow you register
                courses for the semester.
              </p>
              <p style={{ paddingBlockStart: "2rem" }}>
                Deadline: 15th August 2023
              </p>
            </div>
            <section className={styles.main}>
                <Button text="PROCEED TO PAYMENT"  className={styles.button} />
              </section>

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
  padding-block-end: 1rem;
  line-height: 2.438rem;
`;
export const Para1 = styled("span")`
  font-weight: 400;
  font-size: 1.6rem;
  color: #000000;
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
