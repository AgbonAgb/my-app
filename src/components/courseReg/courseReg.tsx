import Table from "./table"
import styles from "./courseReg.module.scss";
import { ReactComponent as DropdownIcon } from '../../../src/svgs/dropdownIcon.svg';


const CourseReg = ()=>{
return(
  <main className={styles.main}>
    <section className={styles.section}> 
    <div  className={styles.headingMain}>
    <p className={styles.headerStyle}>COURSE OF STUDY: INFORMATION TECHNOLOGY </p>
    </div>
    
    <div   className={styles.headingMain}>
    <div className={styles.dropdown}>
      <span className={styles.Semester}>Semester 1</span>
      <DropdownIcon/>
    </div>
    </div>

       <Table/>

    </section>
    

  </main>
  
    
  )
}
export default CourseReg;