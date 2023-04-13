import { BoxCelule } from './AtomsStyles/Celule'
import React from 'react'

type CeluleProps ={
    titulo:string;
}

const Celule = ({titulo}: CeluleProps) => {
  return (
    <BoxCelule>{titulo}</BoxCelule>
  )
}

export default Celule
