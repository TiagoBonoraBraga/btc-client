import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Divider,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";

import FormCadProduct from "../FormCadProduct";
import { Content } from "../../../pages/StylePages/HomeUser";
import Header from "../Header";
import Footer from "../../atoms/Footer";


type Product = {
  id: string;
  name: string;
  description: string;
  commission: number;
  score: number;
  price: number;
  createdAt: string;
};

const Product = () => {
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
      <Header />
      <Content>
        
        <Divider />
        <Card>
          <Title>Lista de Produtos</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Descrição</TableHeaderCell>
                <TableHeaderCell>Comissão</TableHeaderCell>
                <TableHeaderCell>Score</TableHeaderCell>
                <TableHeaderCell>Valor</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Text>{item.description}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.commission}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.score}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.price}</Text>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Content>
      <Footer />
    </>
  );
};

export default Product;
