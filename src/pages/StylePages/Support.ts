import styled from "styled-components";

export const SectionSupport = styled.section`
  display: flex;
  width: 60%;
  margin: auto;
  margin-top: 13em;
  margin-bottom: 5em;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2d9bf0;
  border-radius: 20px;
  background-color: #f2f2f2;
  box-shadow: 0 0 20px 10px rgba(128, 128, 128, 0.3);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
  }

`;

export const SupportContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
`;

export const StyleButton = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

