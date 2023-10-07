import { useContext, useEffect, useState } from 'react';
import Table from './table';
import styles from './registeredUsers.module.scss';
// import { ReactComponent as DropdownIcon } from '../../../src/svgs/dropdownIcon.svg';
import { getRegisteredUsers } from '../../service/users';
import { User, Users } from './type';
//import { Dna } from 'react-loader-spinner';
import { Dna } from 'react-loader-spinner';
import { request } from '../../utils/apiCall';
import CustomModal from '../../custom/modal/customModal';
import EditUser from './editModal';
import apiCall2 from '../../utils/apiCall2';
import jwtDecode from 'jwt-decode';

import { Field, FormikProvider, FormikValues, useFormik } from 'formik';
// import { NotificationContext } from '../../providers/Notification';
import { NotificationContext } from '../../providers/Notification';
import { useNavigate } from 'react-router';

interface DecodedToken {
	nameid: string;
	name: string;
	email: string;
	jti: string;
	role: string;
	nbf: number;
	exp: number;
	iat: number;
}

const RegUsers = () => {
	const [userChange, setUserChange] = useState('');
	const [users, setUsers] = useState([] as Users);
	const [user, setUser] = useState({} as User);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>('');
	const [openEditModal, SetOpenEditModal] = useState(false);
	const { showNotification } = useContext(NotificationContext);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const decodedToken = jwtDecode(token as string) as DecodedToken;

		if (decodedToken?.role === 'Applicant') {
			showNotification({
				message: 'Welcome Applicant',
				type: 'success',
			});
		}
	}, []);

	// const dispatch = useDispatch()
	// const sessionDetails = useSelector((state: RootState) => state?.useAuthSlice?.userDetails)

	const handleCloseEditModal = () => {
		SetOpenEditModal(false);
	};

	useEffect(() => {
		(async () => {
			const { users, isLoading, error } = await getRegisteredUsers();
			setUsers(users);
			setIsLoading(isLoading);
			setError(error);
		})();
	}, [userChange]);

	const deleteUser = async (userId: string) => {
		try {
			await request.delete(`Authentication/DeleteUser?UserId=${userId}`);
			// notify the user is deleted with an npm notification package

			showNotification({
				message: 'Deleted Successful',
				type: 'success',
			});

			setUserChange('user is deleted');
		} catch (error) {
			// notify the user is not deleted with an npm notification package
			showNotification({
				message: 'Failed',
				type: 'error',
			});
		}
	};

	const editUser = async (user: User) => {
		// set the user to state
		setUser(user);

		SetOpenEditModal(true);
		// set the boolean over of the state to open a modal
	};

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.headingMain}>
					<p className={styles.headerStyle}>Registtered Users </p>
				</div>

				{/* <div className={styles.headingMain}>
                <div className={styles.dropdown}>
                    <span className={styles.Semester}>Semester 1</span>
                    <DropdownIcon />
                </div>
            </div> */}

				{isLoading ? (
					<Dna
						visible={true}
						height='80'
						width='80'
						ariaLabel='dna-loading'
						wrapperStyle={{ marginInline: 'auto' }}
						wrapperClass='dna-wrapper'
					/>
				) : error ? (
					<p className='error'>{error}</p>
				) : (
					<Table users={users} deleteUser={deleteUser} editUser={editUser} openEditModal={openEditModal} />
				)}
			</section>

			{/* 
            render modal here
            check if the user exist 

            Object.values(user).length > 0 && <UserEditModal user={user} />
            
            */}
			<CustomModal
				maxWidth='md'
				open={openEditModal}
				Content={<EditUser handleCloseEditModal={handleCloseEditModal} user={user} />}
			/>
		</main>
	);
};

export default RegUsers;
