import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { api } from "../../../utils/api/api";
import { useEffect, useState } from "react";



const CommissionsViews = () => {
  const [commissions, setTotalCommissions] = useState<Number>(0);
  const [score, setScore] = useState<Number>(0);
  const [Products, setTotalProducts] = useState(0);
  
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getProducts();
        const data = response;
        const totalScore = data.reduce(
          (sum: number, score: { score: number }) => sum + score.score,
          0
        );
        const Products = data.reduce(
          (sum: number, commission: { price: number }) =>
            sum + commission.price,
          0
        );
        const totalCommission = data.reduce(
          (sum: number, commission: { commissions: number }) =>
            sum + commission.commissions,
          0
        );
        setTotalProducts(Products);
        setScore(totalScore);
        setTotalCommissions(totalCommission);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const chartdata = [
    {
      name: "Comissões",
      "Rendimentos totais": commissions,
    },
    {
      name: "Score",
      "Rendimentos totais": score,
    },
    {
      name: "Produtos",
      "Rendimentos totais": Products,
    },
  ];
  const dataFormatter = (number: number) => {
    return "R$" + Intl.NumberFormat("br").format(number).toString();
  };

  //console.log("ChartData", chartdata);
  return (
    <Card>
    <Title>Seus Rendimentos</Title>
    <Subtitle>
      Histórico de Ganhos totais
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Rendimentos totais"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
  );

};

export default CommissionsViews;