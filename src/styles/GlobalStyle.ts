import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Space mono";
  background-color: #08050B;
}

body {
  margin: 0;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font: inherit;
}

h1{
  font-size: 2.5rem;
  font-weight: bold;
}

h2{
  font-size: 1.5rem;
  color: #E52575;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input {
  font: inherit;
  border: 2px solid;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 20px;
}
`;

export default GlobalStyle;
