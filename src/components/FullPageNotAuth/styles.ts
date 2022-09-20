import styled from "styled-components";

export const LoginContainerMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #354f52;
  @media (max-width: 1400px) {
    height: 120vh;
  }
`;
export const ContainerChildren = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
