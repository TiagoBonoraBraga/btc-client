import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 300px) {
    width: 70%;
    max-width: none;
    margin-right: 1rem;
    margin-bottom: 1rem;

  }
`;
export const CardImage = styled.img`
  width: 30%;
  height: 20px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  text-align: center;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;