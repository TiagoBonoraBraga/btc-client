import React, { useEffect, useState } from 'react'

import { AiOutlineCheck } from 'react-icons/ai';
import { BoxButton } from './AtomsStyles/Rows';
import { CreateClientRequest } from '../../utils/types/requests';
import { FiEdit } from 'react-icons/fi';
import ModalClient from '../organisms/ModalClient';

export type RowsClientProps = {
 
  idFranchise: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  situacao: string;
  
}

const RowsClient = ({ idFranchise, name, email, phone, cpf, situacao}: RowsClientProps) => {
    const [clientSelect, setClientSelect] = useState<RowsClientProps>();
    const [showModalClients, setShowModalClients] = useState<boolean>(false);

  function handleClick() {
    setClientSelect({ idFranchise, name, email, phone, cpf, situacao });
    setShowModalClients(true);
  }

  function closeModal() {
    setShowModalClients(false);
  }

  useEffect(() => {
    console.log(clientSelect);    
  }, [clientSelect]);

  return (<>
  
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
       <td>{cpf}</td>
      <td>
        <BoxButton onClick={handleClick}>
          <FiEdit color="#2D9BF0" />
        </BoxButton>
      </td>
      <td><AiOutlineCheck color={"green"}/>{situacao}</td>
    </tr>
       <td>
  {showModalClients && (
    <ModalClient
            show={showModalClients}
            handleClose={closeModal}
            clientSelect={clientSelect}
            onSave={function (client: RowsClientProps): void {
              throw new Error("Function not implemented.");
            } } id={""}    />
  )}
</td>
  </>
  )
}

export default RowsClient
