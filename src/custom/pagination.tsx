import { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from "@mui/system";


interface Props {
	pageNumber: number;
	pageSize: number;
	totalSize: number;
	setPageNumber: (number: number) => void;
}

const Paginatiion: FC<Props> = ({ totalSize, pageNumber, pageSize, setPageNumber }) => {
	const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
		setPageNumber(page);
	};

	const hasRemainingPageItem = (): boolean => (Number.isInteger(totalSize / pageSize) ? false : true);

	const derivePageNumber = (): number => {
		if (hasRemainingPageItem()) {
			return Math.trunc(Math.floor(totalSize / pageSize)) + 1;
		}

		return Math.floor(totalSize / pageSize);
	};

	return (
		<StyledPagination
			count={derivePageNumber()}
			variant='outlined'
			color='primary'
			shape='rounded'
			page={pageNumber}
			onChange={handleChange}
			sx={{ float: 'right' }}
		/>
	);
};

export default Paginatiion;

const StyledPagination = styled(Pagination)`
	@media print {
		padding: 2rem;
		display: none;
	}
`;
