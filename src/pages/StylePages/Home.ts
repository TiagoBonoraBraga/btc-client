import styled from 'styled-components';


export const Section = styled.section`
  display: flex;
  margin-top: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 10px;
  }
`;

export const LeftDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const RightDiv = styled.div`
  display: grid;
  align-items: center;
  margin: 10px;
  width: 50%;
  height: 200px;
  /* background-color: #f2f2f2;  */
  border-radius: 10px;
  height: calc(2 * var(--item-count, 1)) vh;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyleSubTitulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;