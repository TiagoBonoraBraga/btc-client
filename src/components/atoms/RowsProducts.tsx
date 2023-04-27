import React, { useEffect, useState } from "react";

import { BoxButton } from "./AtomsStyles/Rows";
import { FiEdit } from "react-icons/fi";
import ModalProducts from "../../components/organisms/ModalProducts";

export type RowsProductsProps = {
  id: string,
  name: string;
  description: string;
  commission: number;
  score: number;
  price: number;
};

const RowsProducts = ({id, name, description, commission, score, price }: RowsProductsProps) => {
  const [showModalProducts, setShowModalProducts] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<RowsProductsProps>();

  function handleClick() {
    setProductSelect({ id, name, description, score, commission, price });
    setShowModalProducts(true);
  }
  function closeModal() {
    setShowModalProducts(false);
  }

  useEffect(() => {
    console.log(productSelect);
    
  }, [productSelect]);
  
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{commission}</td>
        <td>{score}</td>
        <td>{price}</td>
        <td>
          <BoxButton onClick={handleClick}>
            <FiEdit color="#2D9BF0" />
          </BoxButton>
        </td>
      </tr>
      <td>
  {showModalProducts && (
    <ModalProducts
            show={showModalProducts}
            handleClose={closeModal}
            productSelect={productSelect}
            onSave={function (product: RowsProductsProps): void {
              throw new Error("Function not implemented.");
            } } id={""}    />
  )}
</td>
    </>
  );
};

export default RowsProducts;
