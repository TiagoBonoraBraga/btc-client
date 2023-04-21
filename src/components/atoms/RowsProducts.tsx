import { BoxButton } from "./AtomsStyles/Rows";
import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import ModalProducts from "../../components/organisms/ModalProducts";

export type RowsProductsProps = {
  name: string;
  description: string;
  commission: string;
};

const RowsProducts = ({ name, description, commission }: RowsProductsProps) => {
  const [showModalProducts, setShowModalProducts] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<RowsProductsProps>();

  function handleClick() {
    setProductSelect({ name, description, commission });
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
      }}
    />
  )}
</td>
    </>
  );
};

export default RowsProducts;
