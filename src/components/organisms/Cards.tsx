import React from 'react';
import { CardContainer, CardDescription, CardImage, CardTitle } from './AtomsStyles/Card';

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
        <CardDescription>{description}</CardDescription>
        {/* <CardImage src={image} alt="" /> */}
      </CardContainer>
    </>
  );
};

export default Cards;
