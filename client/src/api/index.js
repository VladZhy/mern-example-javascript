import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000',
	credentials: 'include'
});

const api = createApi({
	baseQuery,
	endpoints: () => ({}),
	tagTypes: ['Guide', 'User']
});

export default api;
