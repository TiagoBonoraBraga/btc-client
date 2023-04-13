import RowsClient, { RowsClientProps } from '../atoms/RowsClient';

import { BoxTable } from './MoleculesStyle/Table';
import Celule from '../atoms/Celule';
import React from 'react'

type TableClientProps = {
    data: any;
}

const TableClients = ({data}: TableClientProps ) => {
  return (
   <BoxTable>
     <thead>                
        <Celule titulo="Nome" />
        <Celule titulo="Produtos" />
        <Celule titulo="Franquia" />
        <Celule titulo="Situação" />
     </thead>
     <tbody>
        {data.map((row: RowsClientProps, index: any) =>
        <RowsClient key={index}  nome={row.nome} produto={row.produto} franquia={row.franquia} situacao={row.situacao} />
        )}
      </tbody>

   </BoxTable>
  )
}

export default TableClients
