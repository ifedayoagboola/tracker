import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}

input{
width: 100%;
height: 3rem;
outline: none;
font-size: 1.2rem;

::placeholder{
    font-size: 0.9rem;
}
}
h1, h2, p{
    color: #000D1A;
}
a,li{
  text-decoration: none;
  color: #fff
}
`;
export const Container = styled.div`
  padding: 0 5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
export const Button = styled.button`
  width: 160px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  margin: 1rem 0;
  border: none;
  outline: none;
  background-color: #f57f55;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(0.92);
  }
`;

export default GlobalStyle;
