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
      <Divider /> 
      <Grid numColsMd={2} className="mt-6 gap-6">
        <Card decoration="top" decorationColor="indigo">
          <ChartView />
        </Card>
        <Card>
          <TableSales />
        </Card>
      </Grid>
   </Content>
 
      <Footer />
    </>
  );
};

export default User;
