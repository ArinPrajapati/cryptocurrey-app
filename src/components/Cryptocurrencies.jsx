import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  // const {simplified } = props;
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFeching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setCryptos(cryptoList?.data?.coins);

    const filterdData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filterdData);
  }, [cryptoList, searchTerm]);

  console.log(cryptos);

 

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            type="text"
            placeholder="Search Crypto-currency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {(isFeching) ? ("loading..."): ""}

      <Row gutter={[20, 41]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name} `}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price:{millify(currency.price)}</p>
                <p>Market Cap :{millify(currency.maketCap)}</p>
                <p>Daily Change :{millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
