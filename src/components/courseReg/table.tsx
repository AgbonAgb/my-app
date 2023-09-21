import { forwardRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import currencyFormatter from 'currency-formatter';
import { TableHead, styled } from "@mui/material";
// import { StyledButton, StyledCell, StyledTableHead } from './styles';


// export interface Items {
// 	transactionId: number;
// 	maskedCard: string;
// 	channelCode: string;
// 	adviceId: number;
// 	processorCode: string;
// 	providerId: number;
// 	status: string;
// 	message: string;
// 	createdOn: string;
// 	paymentDate?: string;
// 	merchantReferenceToProcessor: string;
// 	transactionType: string;
// 	reportStatus: string;
	
// }

// export interface TableProps {
// 	transactions?: [];
// 	pageNumber: number;
// 	pageSize: number;
// 	totalPageSize: number;
// 	setPageNumber: (pageNumber: number) => void;
// }

// const transactions = [
//     {
//       header: "Membership Through Examination/NYSC Route",
//       body: "Did you just graduate from Higher Institution or do you want to switch careers to HR? Do you have less than seven (7) years post-graduation experience? This route is for you.",
  
      
//     },

//   ];

const DenseTable = () => {

    interface DogBreed {
        course: string;
        code: string;
        unit: string;
        lecturer: string;
      }
      
      const dogBreeds: DogBreed[] = [
        {      
          course: 'computer science',
          code: 'csc',
          unit: '2 units',
          lecturer: 'Mr. peter ojo',
        },
        {      
            course: 'computer science',
            code: 'csc',
            unit: '2 units',
            lecturer: 'Mr. peter ojo',
          },
          {      
            course: 'computer science',
            code: 'csc',
            unit: '2 units',
            lecturer: 'Mr. peter ojo',
          },
          {      
            course: 'computer science',
            code: 'csc',
            unit: '2 units',
            lecturer: 'Mr. peter ojo',
          },
          {      
            course: 'computer science',
            code: 'csc',
            unit: '2 units',
            lecturer: 'Mr. peter ojo',
          },
      
       
      ];
      
      const tableRow = dogBreeds &&
      dogBreeds?.map(item => (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={item?.course}>
            <StyledCell>{item?.course|| 'N/A'}</StyledCell>
            <StyledCell>{item?.code|| 'N/A'}</StyledCell>
            <StyledCell>{item?.unit|| 'N/A'}</StyledCell>
            <StyledCell>{item?.lecturer|| 'N/A'}</StyledCell>
          



        </TableRow>

        
        
      ))

      


		// const tableRow =
		// 	transactions &&
		// 	transactions?.map(transaction => (
		// 		<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={transaction?.transactionId}>
		// 			<StyledCell>{transaction?.header|| 'N/A'}</StyledCell>
		// 			<StyledCell>{transaction?.advice?.merchantRef || 'N/A'}</StyledCell>
		// 			<StyledCell underline={true}>{transaction?.channelCode || 'N/A'}</StyledCell>
		// 			<StyledCell>
		// 				{currencyFormatter.format(transaction?.advice?.originalAmount / 100, { code: 'NGN' })}
		// 			</StyledCell>
		// 			<StyledCell
		// 				color={
		// 					transaction?.status === 'Successful'
		// 						? 'var(--color-success)'
		// 						: transaction?.status === 'Failed'
		// 						? 'var(--color-danger)'
		// 						: ''
		// 				}
		// 			>
		// 				{transaction?.status || 'N/A'}
		// 			</StyledCell>
		// 			<StyledCell>

		// 			</StyledCell>
		// 		</TableRow>
		// 	));

		// if (!transactions || transactions?.length < 1) {
		// 	return <Empty description={true}>There are no transactions</Empty>;
		// }

		return (
			<TableContainer sx={{ marginBlockEnd: '4rem' }}>
				<Table sx={{ minWidth: 650, border: 'none' }} size='medium' aria-label='a dense table'>
					<StyledTableHead>
						<TableRow>
							<TableCell>COURSES </TableCell>
							<TableCell>CODE</TableCell>
							<TableCell>UNITS</TableCell>
							<TableCell>LECTURER</TableCell>
						
						</TableRow>
					</StyledTableHead>
					<TableBody>{tableRow}</TableBody>
				</Table>

				<style>{`@page { margin:2rem !important; }`}</style>
			</TableContainer>
		);
	}


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
		color: ${props => (props.color ? props.color : '#3e4954')};
		font-style: ${props => (props.underline ? 'underlined' : 'none')};
		white-space: nowrap;
		text-transform: capitalize;
	}
`;