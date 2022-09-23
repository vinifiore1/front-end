import React, { ReactNode } from "react";
import { ContainerChildren, LoginContainerMain, LogoContainer } from "./styles";
import mainLogo from "../../img/png/Logo.png";
import { AdminLoading } from "../AdminLoading/AdminLoading";

interface IPropsFullPage {
  children?: ReactNode;
  loading?: boolean;
}

export const FullPageNotAuth = (props: IPropsFullPage) => {
  return (
    <LoginContainerMain>
      <LogoContainer>
        <img src={mainLogo} alt="Error" />
      </LogoContainer>
      <ContainerChildren>{props.children}</ContainerChildren>
      {props.loading && <AdminLoading />}
    </LoginContainerMain>
  );
};
