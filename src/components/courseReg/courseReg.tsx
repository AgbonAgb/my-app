import Table from "./table"
import styles from "./courseReg.module.scss";
import { ReactComponent as DropdownIcon } from '../../../src/svgs/dropdownIcon.svg';


import { Button } from "@mui/material";
// import { useState } from "react";
import styles2 from './filter/styles.module.scss';
import { useState } from "react";
// import Button from "../../custom/button/button";
import Buttons from "../../custom/button/styledButton/main.module.scss";



const CourseReg = ()=>{
  const [list, setList] = useState(false)
  const [semester, setSemester] = useState(" Semester 1")

  interface Course {
    id: number;
    code: string;
    unit: string;
    lecturer: string;
  }

    const options: Course[] = [
    {
      id: 1,
      code: "Semester 1",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    {
      id: 2,
      code: "Semester 2",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },

    

  ];

  const handleOpenVendorModal = () => {
    setList(!list);
    // setIsOpen(false);
  };
  
return(
  <main className={styles.main}>
    <section className={styles.section}> 
    <div  className={styles.headingMain}>
    <p className={styles.headerStyle}>COURSE OF STUDY: INFORMATION TECHNOLOGY </p>
    </div>
    
    <div   className={styles.headingMain}>
    <div className={styles.dropdown} onClick={handleOpenVendorModal}>
      <span className={styles.Semester} >{semester === "" ? "Semester 1" : semester}</span>
      <DropdownIcon className={list? "" : styles.rotateArrow}/>
    </div>
    </div>

    {
      list && (
        <div   className={styles.headingMain}>
          <div className={styles.drop}>
          {options &&
                  options.length > 0 &&
                  options.map((data, index) => (
                    <div>
                      <Button
                        className={styles.Semester_btn}
                        key={index}
                        onClick={() => {
                          setSemester(data.code);
                          setList(false);
                          
                        }}
                      >
                        {data?.code}
                      </Button>
                    
                      </div>
               ))}

          </div>
  
        </div>
      )
    }
    

 


   

       <Table/>
       <Buttons text="REGISTER COURSES" className={styles.btn} disabled={true} />


    </section>
    

  </main>
  
    
  )
}
export default CourseReg;