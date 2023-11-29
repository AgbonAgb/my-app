import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableHead, styled } from "@mui/material";
import Button from "../../custom/button/button";
import styles from "./main.module.scss";
import CheckBox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import Pagination from "../../custom/pagination";

interface Course {
  id:number;
  course: string;
  code: string;
  unit: string;
  lecturer: string;
}

interface Props {
	pageNumber:number;
   pageSize:number;
    totalPageSize:number;
     setPageNumber:(pageNumber: number) => void;
}

const DenseTable = ({ pageNumber, pageSize, totalPageSize, setPageNumber }: Props) => {

  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = useState<Course[]>([]);




    const course: Course[] = [
    {
      id:1,
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    {
      id:2,
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    {
      id:3,
      course: "computer science",
      code: "csc",
      unit: "2 units",
      lecturer: "Mr. peter ojo",
    },
    

  ];

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, checked} = e.target;
    setIsCheck([...isCheck, id]);
    if(!checked ){
        setIsCheck(isCheck.filter(item => item !== id));
    }

}


  const tableRow =
  course &&
  course?.map((item) => (
      <>
        <TableRow
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          key={item?.id}
        >
			
          <StyledCell><CheckBox onChange={handleClick}  id={item?.id?.toString()} checked={isCheck.includes(item?.id?.toString())} className={styles.radio}/>{ item?.course || "N/A"}</StyledCell>
          <StyledCell>{item?.code || "N/A"}</StyledCell>
          <StyledCell>{item?.unit || "N/A"}</StyledCell>
          <StyledCell>{item?.lecturer || "N/A"}</StyledCell>
         
        
          <StyledCell>
					<button >Delete</button>
                    <button >Delete</button>
				</StyledCell>
                {/* <StyledCell>
					<button >Delete</button>
				</StyledCell> */}
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
		  
            <TableCell><CheckBox className={styles.radio}/>Applicant Name </TableCell>
            <TableCell>Faculty</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Approve</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>{tableRow}</TableBody>
      </Table>
	  <div   className={styles.headingMain}>

	  </div>
        <Pagination
					pageNumber={pageNumber}
					totalSize={totalPageSize}
					pageSize={pageSize}
					setPageNumber={setPageNumber}
				/>
      <style>{`@page { margin:2rem !important; }`}</style>
    </TableContainer>
  );
};

export default DenseTable;
export const StyledTableHead = styled(TableHead)`
  box-shadow: none;
  & tr {
    background-color: #EDEBF8;
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