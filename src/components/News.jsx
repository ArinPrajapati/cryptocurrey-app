
import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";

import { useGetCryptosNewsQuery } from "../services/cryptoNews";

const { Text, Title } = Typography;
const { Option } = Select;

const News = (simplified) => {
  const {  data : cryptoNews, error, isLoading } = useGetCryptosNewsQuery(
    simplified ? 10 : 100,
);
 console.log(cryptoNews)
  return <div>News</div>;
};

export default News;

