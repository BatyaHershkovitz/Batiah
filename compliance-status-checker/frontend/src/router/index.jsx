import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../components/Navigation/Navigation";
import Graph from '../components/Graph/Graph'
import TableRate from '../components/Tables/TableRate/TableRate'
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import SearchDate from "../components/Forecast/Forecast";
import TableMulti from "../components/Tables/TableMult/TableMult";

export default function Router() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Navigation />
        <Layout style={{ minHeight: "100vh" }}>
        <Routes  basename={'/data'}>
          <Route path="/"  element={<Home/>}/>
          <Route path="/graph" element={<Graph/>} />
          <Route path="/table-rate" element={<TableRate/>} />
          <Route path="/search-date" element={<SearchDate/>} />
          <Route path="/multi-matrix" element={<TableMulti/>} />
          <Route path="/*"  element={<NotFound/>}  exact />
        </Routes>
        </Layout>
      </Layout>
    );
}

