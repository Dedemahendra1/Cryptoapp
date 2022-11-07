import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3567ff617dmsh9349633c0ba9d33p19f08djsna8a21195aba5',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest =(url) =>({url, headers: cryptoApiHeaders});

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({ query: (uuid) => createRequest(`/coin/${uuid}`) }),
        
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
    })
});

export const {
    useGetCryptoQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,
} = cryptoApi;

