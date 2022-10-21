import React, { ReactNode } from "react";
import { FullPageContainer, SideBarContainerChildren } from "./styles";

import { AdminLoading } from "../AdminLoading/AdminLoading";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";

interface IPropsFullPage {
  children?: ReactNode;
  loading?: boolean;
}

export const FullPageMain = (props: IPropsFullPage) => {
  return (
    <>
      <Header />
      <FullPageContainer>
        <SideBarContainerChildren>
          <SideBar />
          {props.children}
        </SideBarContainerChildren>
      </FullPageContainer>
      {props.loading && <AdminLoading />}
    </>
  );
};
