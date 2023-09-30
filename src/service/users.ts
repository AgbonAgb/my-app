import { request } from '../utils/apiCall';
import { Users, RegisteredUserResponse } from '../components/users/type';

/**for users */

export const getRegisteredUsers = async (): Promise<RegisteredUserResponse> => {
	let isLoading = true;

	try {
		const users = (await request.get('/Authentication/GetAllUsers')).data as Users;
		isLoading = false;

		return {
			users: users,
			isLoading,
			error: '',
		};
	} catch (error: any) {
		isLoading = false;

		return {
			users: [],
			isLoading,
			error: error?.response?.data?.message || error?.message,
		};
	}
};
