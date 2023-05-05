import React from "react";
import Header from "../../components/organisms/Header";
import SubTitle from "../../components/atoms/SubTitle";
import { Content } from "../StylePages/HomeUser";
import Footer from "../../components/atoms/Footer";
import { Card, Col, Divider, Grid } from "@tremor/react";
import ChartView from "../../components/organisms/PerformHistory";
import TableSales from "../../components/molecules/sales/TableSales";

const User = () => {
  return (
    <>
      <Header />
      <Content>
        <SubTitle titulo={"Receitas"} />
        <Grid numCols={2} numColsSm={1} numColsLg={2} className="gap-3">
          <Col numColSpan={1} numColSpanLg={2}></Col>
          <Col>
            <ChartView />
          </Col>
          <Col>
            <TableSales />
          </Col>
        </Grid>
      </Content>
      <Footer />
    </>
  );
};

export default User;
