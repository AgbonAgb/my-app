export const useAuth = (): string | null => {
	return localStorage.getItem('token');
};
