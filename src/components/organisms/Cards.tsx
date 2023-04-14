import { CardContainer, CardDescription, CardImage, CardTitle } from './OrganismsStyle/StyleCards';

import React from 'react';
import SubTitulo from '../atoms/SubTitle';

interface CardsProps {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
}
  
const Cards: React.FC<CardsProps> = ({ title, image, description, onClick }) => {
  return (
    <>
      <CardContainer onClick={onClick}>
      <CardTitle>{title}</CardTitle>
        {/* <SubTitulo titulo={''}></SubTitulo> */}
        {/* <CardImage src={image} alt="" /> */}
      </CardContainer>
    </>
  );
};

export default Cards;
