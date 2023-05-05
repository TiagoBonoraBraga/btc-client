import "../../pages/UserPages/index.css";
import { Card, Button, Text, Metric, Flex } from "@tremor/react";
import { useEffect, useState } from "react";
import { api } from "../../utils/api/api";

export interface CommissionsViewsProps {
  totalCommission: number;
}

const CardCommissions = () => {
  const [commissions, setTotalCommissions] = useState(0);
  const [score, setScore] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getProducts();
        const data = response;
        const totalScore = data.reduce(
          (sum: number, score: { score: number }) =>
            sum + score.score,
          0
        );
        const totalCommission = data.reduce(
          (sum: number, commission: { commission: number }) =>
            sum + commission.commission,
          0
        );
       /*  console.log(response) */
        setScore(totalScore);
        setTotalCommissions(totalCommission);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const kpiData = [
    {
      title: "Clientes",
      metric: commissions,
      score: score
    },
  ];

  return (
    <Card className="max-w-xs mx-auto">
      <Text>Comissões</Text>
      <Flex justifyContent="start" className="space-x-3">
        <Metric>R${kpiData[0].metric.toString()}</Metric>
        <Text>Score</Text>
        <Metric>{kpiData[0].score}</Metric>
      </Flex>
    </Card>
  );
};

export default CardCommissions;
