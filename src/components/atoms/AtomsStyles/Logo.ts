import styled from "styled-components";
import logoHyperlocal from "../../../assets/hyperlocal.jpg";

export const LogoBox = styled.div`
  /* position: absolute; */
  /* width: 200px; */
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  /* padding-left: 40px; */
  h1 {
    color: #2d9bf0;
    font-size: 2rem;
    font-weight: 500;
  }
`;
export const Image = styled.div`
  opacity: 0.4;
  border-radius: 50%;
  box-shadow: 0 0 5px 10px rgba(45, 155, 240, 0.4);
  width: 400px;
  height: 400px;
  background-image: url(${logoHyperlocal});
  background-size: cover;
`;
