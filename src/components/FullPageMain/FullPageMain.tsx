import React, { ReactNode } from "react";
import {
  ContainerChildren,
  HeaderContainer,
  FullPageContainerMain,
  FullPageContainer,
  SideBarContainerChildren,
} from "./styles";

import { AdminLoading } from "../AdminLoading/AdminLoading";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";

interface IPropsFullPage {
  children?: ReactNode;
  loading?: boolean;
}

export const FullPageMain = (props: IPropsFullPage) => {
  return (
    <FullPageContainerMain>
      <FullPageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <SideBarContainerChildren>
          <SideBar />
          <ContainerChildren>{props.children}</ContainerChildren>
        </SideBarContainerChildren>
      </FullPageContainer>
      {props.loading && <AdminLoading />}
    </FullPageContainerMain>
  );
};
