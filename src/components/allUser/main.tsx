import Table from "./allUsersTable"
import styles from "./allUsers.module.scss";

import { useState } from "react";


const AllUsers = ()=>{
  const [list, setList] = useState(false)

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


  
return(
  <main className={styles.main}>
    <section className={styles.section}> 


       <Table/>

    </section>
    

  </main>
  
    
  )
}
export default AllUsers;