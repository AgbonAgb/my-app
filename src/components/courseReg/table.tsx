import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableHead, styled } from "@mui/material";
import Button from "../../custom/button/button";
import styles from "./courseReg.module.scss";
<<<<<<< HEAD
import Radio from '@mui/material/Radio';



const DenseTable = () => {
  interface DogBreed {
    course: string;
    code: string;
    unit: string;
    lecturer: string;
  }

  const dogBreeds: DogBreed[] = [
    {
=======
import CheckBox from '@mui/material/Checkbox';
import { useState } from "react";

interface Course {
  id:string;
  course: string;
  code: string;
  unit: string;
  lecturer: string;
}


const DenseTable = () => {
  const [isCheck, setIsCheck] = useState<string[]>([]);


    const course: Course[] = [
    {
      id:"1",
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    {
<<<<<<< HEAD
=======
      id:"2",
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    {
<<<<<<< HEAD
=======
      id:"3",
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    

  ];

<<<<<<< HEAD
  const tableRow =
    dogBreeds &&
    dogBreeds?.map((item) => (
=======
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, checked} = e.target;
    setIsCheck([...isCheck, id]);
    if(!checked ){
        setIsCheck(isCheck.filter(item => item !== id));
    }

    console.log(checked, "cjedn")
}
console.log(isCheck, "cjedn")


  const tableRow =
  course &&
  course?.map((item) => (
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
      <>
        <TableRow
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          key={item?.course}
        >
			
<<<<<<< HEAD
          <StyledCell><Radio className={styles.radio}/>{ item?.course || "N/A"}</StyledCell>
          <StyledCell>{item?.code || "N/A"}</StyledCell>
          <StyledCell>{item?.unit || "N/A"}</StyledCell>
          <StyledCell>{item?.lecturer || "N/A"}</StyledCell>
=======
          <StyledCell><CheckBox onChange={handleClick}  id={item?.id} checked={isCheck.includes(item?.id)} className={styles.radio}/>{ item?.course || "N/A"}</StyledCell>
          <StyledCell>{item?.code || "N/A"}</StyledCell>
          <StyledCell>{item?.unit || "N/A"}</StyledCell>
          <StyledCell>{item?.lecturer || "N/A"}</StyledCell>\
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
        </TableRow>

        
      </>
    ));

  return (
    <TableContainer sx={{ marginBlockEnd: "4rem" }}>
      <Table
        sx={{ minWidth: 650, border: "none" }}
        size="medium"
        aria-label="a dense table"
      >
        <StyledTableHead>
          <TableRow>
		  
            <TableCell style={{paddingInlineStart: "3rem"}}>COURSES </TableCell>
            <TableCell>CODE</TableCell>
            <TableCell>UNITS</TableCell>
            <TableCell>LECTURER</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>{tableRow}</TableBody>
      </Table>
	  <div   className={styles.headingMain}>
<<<<<<< HEAD
	  <Button text="REGISTER COURSES" className={styles.btn} disabled={true} />
=======
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec

	  </div>
	

      <style>{`@page { margin:2rem !important; }`}</style>
    </TableContainer>
  );
};

export default DenseTable;
export const StyledTableHead = styled(TableHead)`
  box-shadow: none;

  & tr {
    // background-color: #f3f8fc;
    // border: 0.5px solid #eaf4fb;
    border-radius: 10px 10px 0px 0px;
  }

  & tr th {
    font-weight: 600;
    font-size: 1.6rem;
    color: #333333;
    border-bottom: 0;
    white-space: nowrap;
  }
`;

export const StyledCell = styled<any>(TableCell)`
  &.MuiTableCell-root.MuiTableCell-sizeMedium {
    border-bottom: 0;
    font-size: 1.4rem;
    color: ${(props) => (props.color ? props.color : "#3e4954")};
    font-style: ${(props) => (props.underline ? "underlined" : "none")};
    white-space: nowrap;
    text-transform: capitalize;
  }
`;
