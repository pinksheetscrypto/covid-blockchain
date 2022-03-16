import { createApi } from '@reduxjs/toolkit/query/react';
import covidLazyBaseQuery from './covidLazyBaseQuery';

export const baseQuery = covidLazyBaseQuery({});

export default createApi({
  reducerPath: 'covidApi',
  baseQuery,
  endpoints: () => ({}),
});
