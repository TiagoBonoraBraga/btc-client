import "../../../../src/pages/UserPages/index.css";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Header from "../../organisms/Header";
import { Content } from "../../../pages/StylePages/HomeUser";
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
} from "@tremor/react";
import FormCadClient from "../FormCadClient";
import React from "react";
import Footer from "../../atoms/Footer";

type Product = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cnpj: string;
  createdAt: string;
};

const TableUser = () => {
  const [clients, setClients] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.getClients();
        const clietsData = response;

        setClients(clietsData);
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
          <Flex>
            <Title> Lista de Clientes </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Cadastros de clientes"
            />
          </Flex>
          <Card>
          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Telefone</TableHeaderCell>
                <TableHeaderCell>CPF</TableHeaderCell>
                <TableHeaderCell>CNPJ</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {clients.map((person) => (
                <TableRow key={person.id}>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>{person.phone}</TableCell>
                  <TableCell>{person.cpf}</TableCell>
                  <TableCell>{person.cnpj}</TableCell>
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

export default TableUser;
