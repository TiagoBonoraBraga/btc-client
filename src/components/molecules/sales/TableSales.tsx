import "../../../../src/pages/UserPages/index.css";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { InformationCircleIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
  Icon,
  Flex,
  Divider,
  Metric,
  Text,
} from "@tremor/react";
import Header from "../../organisms/Header";
import NavBar from "../NavBar";
import { Content } from "../../../pages/StylePages/HomeUser";
import CommissionsViews from "../../organisms/userCommission/Commissions";
import FormCadProduct from "../../organisms/FormCadProduct";

type Product = {
  id: string;
  name: string;
  description: string;
  commission: number;
  score: number;
  price: number;
  createdAt: string;
};

const TableSales = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.getProducts();
        const productsByDate: { [key: string]: Product[] } = {};

        // Agrupa os produtos por data
        response.forEach(
          (product: {
            createdAt: string;
            id: string;
            name: string;
            description: string;
            commission: number;
            score: number;
            price: number;
          }) => {
            const date = new Date(product.createdAt); // Cria um objeto de data a partir da string
            const formattedDate = `${date
              .getDate()
              .toString()
              .padStart(2, "0")}/${(date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}/${date.getFullYear().toString()}`; // Formata a data como "dd/mm/aaaa"
            product.createdAt = formattedDate; // Substitui a data original pelo valor formatado
            if (!productsByDate[formattedDate]) {
              productsByDate[formattedDate] = [product];
            } else {
              productsByDate[formattedDate].push(product);
            }
          }
        );

        // Transforma o objeto em uma lista
        const productsList: Product[] = Object.values(productsByDate).flat();
        setProducts(productsList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Flex>
        <Title> Relatório de Vendas </Title>
        <Icon
          icon={InformationCircleIcon}
          variant="simple"
          tooltip="Vendas por período"
        />
      </Flex>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Data</TableHeaderCell>
            <TableHeaderCell>Venda</TableHeaderCell>
            <TableHeaderCell>Score</TableHeaderCell>
            <TableHeaderCell>Comissão</TableHeaderCell>
            <TableHeaderCell>Valor R$</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.createdAt}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.score}</TableCell>
              <TableCell>{product.commission}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSales;
