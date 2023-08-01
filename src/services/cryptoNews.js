import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "ff1a3ad718mshebe234908e11874p153fa1jsn07163f8d5412",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news/search";

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({newSearch,count}) => createRequest(`?q=${newSearch}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
