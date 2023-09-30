import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableHead, styled } from "@mui/material";
import Button from "../../custom/button/button";
import styles from "./registeredUsers.module.scss";
import Radio from '@mui/material/Radio';



const DenseTable = () => {
    interface DogBreed {
        UserId: string;
        Email: string;
        FirstName: string;
        LastName: string;
        PhoneNumber: string;
        RoleName: string;
    }

    const dogBreeds: DogBreed[] = [
        {
            UserId: "",
            Email: "",
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            RoleName: ""
        }



    ];

    const tableRow =
        dogBreeds &&
        dogBreeds?.map((item) => (
            <>
                <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={item?.UserId}
                >
                    <StyledCell>{item?.Email || "N/A"}</StyledCell>
                    <StyledCell>{item?.FirstName || "N/A"}</StyledCell>
                    <StyledCell>{item?.LastName || "N/A"}</StyledCell>
                    <StyledCell>{item?.PhoneNumber || "N/A"}</StyledCell>
                    <StyledCell>{item?.RoleName || "N/A"}</StyledCell>
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

                        {/* <TableCell style={{ paddingInlineStart: "3rem" }}>Users </TableCell> */}
                        <TableCell>UserId</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>FirstName </TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>PhoneNumber</TableCell>
                        <TableCell>RoleName</TableCell>

                    </TableRow>
                </StyledTableHead>
                <TableBody>{tableRow}</TableBody>
            </Table>
            <div className={styles.headingMain}>
                <Button text="REGISTER Users" className={styles.btn} disabled={true} />

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
