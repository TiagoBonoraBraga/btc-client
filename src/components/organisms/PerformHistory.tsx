import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { api } from "../../utils/api/api";

interface Performance {
  date: string;
  Vendas: number;
  Clientes: number;
  Comissões: number;
  totalClientes: number;
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string; // atualize aqui para usar o tipo string
}

const realFormatter = (value: number) =>
  `R$ ${Intl.NumberFormat("br").format(value).toString()}`;

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("br").format(value).toString()}`;

function ChartView() {
  const [selectedKpi, setSelectedKpi] = useState("Vendas");

  const formatters: { [key: string]: any } = {
    Vendas: realFormatter,
    Score: numberFormatter,
    Comissões: realFormatter,
  };

  const PerformHistory = () => {
    const [performance, setPerformance] = useState<Performance[]>([]);
    const [totalClientes, setTotalClientes] = useState(0);

    useEffect(() => {
      async function fetchData() {
        try {
          const [clientsResponse, productsResponse] = await Promise.all([
            api.getClients(),
            api.getProducts(),
          ]);

          const clientsData = clientsResponse.map((client: Client) => {
            const createdAt = new Date(client.createdAt);
            const formattedDate = format(createdAt, "dd/MM/yyyy", {
              locale: ptBR,
            });
            return { ...client, createdAt: formattedDate };
          });

          const clientsCount = clientsData.length;
          setTotalClientes(clientsCount);

          const clientsByDate = clientsData.reduce(
            (acc: { [key: string]: any }, client: Client) => {
              if (!acc[client.createdAt]) {
                acc[client.createdAt] = {
                  date: client.createdAt,
                  Vendas: 0,
                  Score: 0,
                  Comissões: 0,
                };
              }
              acc[client.createdAt].Clientes++;
              acc[client.createdAt].totalClientes = clientsCount;
              return acc;
            },
            {}
          );

          console.log(clientsByDate);

          const productsByDate = productsResponse.reduce(
            (acc: { [key: string]: any }, product: any) => {
              const createdAt = format(
                new Date(product.createdAt),
                "dd/MM/yyyy",
                {
                  locale: ptBR,
                }
              );
              if (!acc[createdAt]) {
                acc[createdAt] = {
                  date: createdAt,
                  Vendas: 0,
                  Score: 0,
                  Comissões: 0,
                };
              }
              acc[createdAt].Vendas += product.price;
              acc[createdAt].Score += product.score;
              acc[createdAt].Comissões += product.price * (product.score / 100);
              return acc;
            },
            {}
            );
            
            console.log(productsByDate);
            const performanceData = Object.keys(productsByDate).map((date) => {
              return {            
                ...productsByDate[date],
                ...clientsByDate[date],
              };
            });
            setPerformance(performanceData);
          console.log(performanceData);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }, []);

    return (
      <Card>
        <div className="md:flex justify-between">
          <div>
            <Flex
              justifyContent="start"
              className="space-x-0.5"
              alignItems="center"
            >
              <Title> Histórico de Performance </Title>
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="Mostra variações diárias (%) do desempenho passado"
              />
            </Flex>
            <Text> Receitas Diárias </Text>
          </div>
          <div className="mt-6 md:mt-0">
            <Toggle
              color="zinc"
              defaultValue={selectedKpi}
              onValueChange={(value) => setSelectedKpi(value)}
            >
              <ToggleItem value="Vendas" text="Vendas" />
              <ToggleItem value="Score" text="Score" />
              <ToggleItem value="Comissões" text="Comissões" />
            </Toggle>
          </div>
        </div>
        <AreaChart
          data={performance}
          index="date"
          categories={[selectedKpi]}
          colors={["blue"]}
          showLegend={false}
          valueFormatter={formatters[selectedKpi]}
          yAxisWidth={56}
          className="h-96 mt-8"
        />
      </Card>
    );
  };
  return <PerformHistory />;
}

export default ChartView;
