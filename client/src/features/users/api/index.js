import api from '../../../api';
const USERS_PATH = '/users';

export const usersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: `${USERS_PATH}/login`,
				method: 'POST',
				body
			})
		}),
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_PATH}/logout`,
				method: 'POST'
			})
		}),
		signUp: builder.mutation({
			query: (body) => ({
				url: `${USERS_PATH}/signup`,
				method: 'POST',
				body
			})
		}),
		updateSettings: builder.mutation({
			query: (body) => ({
				url: `${USERS_PATH}/settings`,
				method: 'PUT',
				body
			})
		})
	})
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useSignUpMutation,
	useUpdateSettingsMutation
} = usersApi;
