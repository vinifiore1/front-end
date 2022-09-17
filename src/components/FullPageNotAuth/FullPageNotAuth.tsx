import React, { ReactNode, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ContainerChildren, LoginContainerMain, LogoContainer } from "./styles";
import mainLogo from "../../img/Logo.png";

interface IPropsFullPage {
  children?: ReactNode;
}

export const FullPageNotAuth = (props: IPropsFullPage) => {
  return (
    <LoginContainerMain>
      <LogoContainer>
        <img src={mainLogo} alt="Error" />
      </LogoContainer>
      <ContainerChildren>{props.children}</ContainerChildren>
    </LoginContainerMain>
  );
};
