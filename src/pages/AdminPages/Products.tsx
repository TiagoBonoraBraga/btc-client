import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { BoxTable } from "../StylePages/Franchised";
import Header from "../../components/organisms/Header";
import ModalProducts from "../../components/organisms/ModalProducts";
import { RowsProductsProps } from "../../components/atoms/RowsProducts";
import SubTitle from "../../components/atoms/SubTitle";
import TableProducts from "../../components/molecules/TableProducts";
import { api } from "../../utils/api/api";

const Products = () => {
  const [rows, setRows] = useState<RowsProductsProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    RowsProductsProps | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const products = await api.getProducts();
      setRows(products);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  function handleSelectProduct(products: RowsProductsProps) {
    setSelectedProduct(products);
  }

  return (
    <>
      <Header />
      <BoxTable>
        <SubTitle titulo="Produtos" />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableProducts
            data={rows}
            handleSelectProduct={handleSelectProduct}
          />
        )}
        {selectedProduct && (
          <ModalProducts
            show={true}
            handleClose={() => setSelectedProduct(undefined)}
            productSelect={selectedProduct}
            onSave={function (product: RowsProductsProps): void {
              throw new Error("Function not implemented.");
            }}
            id={"0"}
          />
        )}
      </BoxTable>
    </>
  );
};

export default Products;
