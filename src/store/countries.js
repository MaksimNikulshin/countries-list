import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countries',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/',
  }),
  tagTypes: ['Countries'], 
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: [{ type: 'Countries', id: 'LIST' }], 
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
