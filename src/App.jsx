import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
// import { ReactRefresh } from 'react-refresh';
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />

              <Route exact path="/exchanges" element={<Exchanges />} />

              <Route exact path="/crypto" element={<Cryptocurrencies />} />

              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={3}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Cryptoverse <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/exchange">Exchange</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
