import styled from "styled-components";

export const LoginContainerMain = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #354f52;
`;

export const InputContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const ForgotPassword = styled.button`
  color: #354f52;
  font-family: "Ubuntu";
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const ForgotPassContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  margin-top: 132px;
  display: flex;
  flex-direction: column;
  grid-gap: 90px;
  align-items: center;
`;
export const TextRegisterContainer = styled.div`
  display: flex;
`;

export const TextRegisterRegular = styled.span`
  color: #354f52;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export const ButtonRegister = styled.button`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #52796f;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  outline: none;
`;
