import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead, styled } from '@mui/material';
import Button from '../../custom/button/button';
import styles from './registeredUsers.module.scss';
import Radio from '@mui/material/Radio';
import { User, Users } from './type';
import { useState } from 'react';

interface Props {
	users: Users;
	deleteUser: (userId: string) => void;
	editUser: (user: User) => void;
	openEditModal:boolean;
}

const DenseTable = ({ users, deleteUser, editUser,openEditModal }: Props) => {


	const tableRow =
		users?.length > 0 &&
		users?.map(user => (
			<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={user?.UserId}>
				<StyledCell>{user?.UserId || 'N/A'}</StyledCell>
				<StyledCell>{user?.Email || 'N/A'}</StyledCell>
				<StyledCell>{user?.FirstName || 'N/A'}</StyledCell>
				<StyledCell>{user?.LastName || 'N/A'}</StyledCell>
				<StyledCell>{user?.PhoneNumber || 'N/A'}</StyledCell>
				<StyledCell>{user?.RoleName || 'N/A'}</StyledCell>
				<StyledCell>
					{/* <button onClick={() => editUser(user)}>Edit</button> */}
					<button onClick={() => editUser(user)}>Edit</button>

				</StyledCell>
				<StyledCell>
					<button onClick={() => deleteUser(user.UserId)}>Delete</button>
				</StyledCell>
			</TableRow>
		));

	return (
		<TableContainer sx={{ marginBlockEnd: '4rem' }}>
			<Table sx={{ minWidth: 650, border: 'none' }} size='medium' aria-label='a dense table'>
				<StyledTableHead>
					<TableRow>
						{/* <TableCell style={{ paddingInlineStart: "3rem" }}>Users </TableCell> */}
						<TableCell>UserId</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>FirstName </TableCell>
						<TableCell>LastName</TableCell>
						<TableCell>PhoneNumber</TableCell>
						<TableCell>RoleName</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</StyledTableHead>
				<TableBody>{tableRow}</TableBody>
			</Table>
			<div className={styles.headingMain}>
				<Button text='REGISTER Users' className={styles.btn} disabled={true} />
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
		color: ${props => (props.color ? props.color : '#3e4954')};
		font-style: ${props => (props.underline ? 'underlined' : 'none')};
		white-space: nowrap;
		text-transform: capitalize;
	}
`;
