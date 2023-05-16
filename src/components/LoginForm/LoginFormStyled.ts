import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: #1d1226;
  padding: 20px;
  border-radius: 10px;

  div {
    margin-block: 25px;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    font: inherit;
    border: 2px solid;
    padding: 5px;
    display: block;
    margin-top: 10px;
    width: 280px;
  }
`;

export default LoginFormStyled;
