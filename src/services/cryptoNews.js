import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const cryptoNewsApiHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "ff1a3ad718mshebe234908e11874p153fa1jsn07163f8d5412",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
https:'bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({url , header:cryptoNewsApiHeader });

export const cryptoApi = createApi({
    reducerPath: 'cryptoNews',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
           query: (newsCategory , count) => createrRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFromat=Raw&freshness=Day&count=${count}`) 
        })
    })
}) 

export const { useGetCryptoNewsQuery } = cryptoApi;

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {
//     safeSearch: 'Off',
//     textFormat: 'Raw'
//   },
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'ff1a3ad718mshebe234908e11874p153fa1jsn07163f8d5412',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
