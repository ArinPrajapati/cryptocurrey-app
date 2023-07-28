// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const cryptoNewsHeaders = {
//   'X-RapidAPI-Key': 'ff1a3ad718mshebe234908e11874p153fa1jsn07163f8d5412',
//   'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
// };


// const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/top';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({count }) => createRequest(`/${count}`),
//     }),
//   }),
// });



// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  'X-RapidAPI-Key': 'ff1a3ad718mshebe234908e11874p153fa1jsn07163f8d5412',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
};

const baseUrl = "https://crypto-news16.p.rapidapi.com/news/top";

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: (count) => createRequest(`/${count}`),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;