import { StatusOnlineIcon } from "@heroicons/react/outline";
import ProductsItens from "../../atoms/productsItens.json";
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
} from "@tremor/react";
import { RowsProductsProps } from "../../atoms/RowsProducts";
import { useState } from "react";



const Product = () => {
  /* const [formValues, setFormValues] = useState<RowsProductsProps>({
    id: productSelect?.id || "",
    name: productSelect?.name || "",
    description: productSelect?.description || "",
    commission: productSelect?.commission || 0,
    score: productSelect?.score || 0,
    price: productSelect?.price || 0,
  }); */
  return (
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
        {ProductsItens.map((item) => (
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
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  );
};

export default Product;
