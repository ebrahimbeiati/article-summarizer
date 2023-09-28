import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/summarize'}),
})