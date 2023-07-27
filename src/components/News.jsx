import React from 'react'
import { Select , Typography , Row , Col , Avatar , Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNews'

const {data , isFetching } = useGetCryptoNewsQuery();
const Allnews = data?.data?.news;
console.log(Allnews);

if (isFetching) return "Loading...";

const News = () => {
  
  return (
    <div>News</div>
  )
}

export default News