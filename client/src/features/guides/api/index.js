import api from '../../../api';
const GUIDES_PATH = '/guides';

export const guidesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createGuide: builder.mutation({
      query: (body) => ({
        url: `${GUIDES_PATH}/create-guide`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateGuideMutation } = guidesApi;
