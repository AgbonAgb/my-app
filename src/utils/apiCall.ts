import axios, { AxiosInstance } from 'axios';

export const request: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	env: {
		FormData: globalThis?.FormData,
	},
});
