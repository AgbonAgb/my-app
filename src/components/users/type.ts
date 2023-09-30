export interface User {
	UserId: string;
	Email?: string;
	FirstName: string;
	LastName: string;
	PhoneNumber?: string;
	RoleName: string[];
}

export type Users = User[];

export type RegisteredUserResponse = {
	users: Users;
	isLoading: boolean;
	error: null | string;
};
