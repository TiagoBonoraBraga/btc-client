import { HeadCel } from './AtomsStyles/TableHeadCel'
import React from 'react'

type TableHeadCelProps ={
    titulo:string;
}

const TableHeadCel = ({titulo}: TableHeadCelProps) => {
  return (
    <HeadCel>{titulo}</HeadCel>
  )
}

export default TableHeadCel
