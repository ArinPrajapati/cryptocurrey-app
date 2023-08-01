import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";

import { useGetCryptosNewsQuery } from "../services/cryptoNews";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImgUrl =
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
const News = (simplified) => {
  // const count =

  const { data: cryptoNews } = useGetCryptosNewsQuery({
    newSearch: "Cryptocurrency",
    count: simplified ? 6 : 10,
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImgUrl}
                  alt=""
                  style={{ maxWidth: "50%", maxHeight: "30%" }}
                />
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)}....` : news.description}
              </p>
              <div className="provider-container">
              <div>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImgUrl} alt="news" />
                <Text className="provider-name">{news?.provider[0].name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
