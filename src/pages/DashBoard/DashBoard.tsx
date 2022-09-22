import { useEffect } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import {
  DashBoardContainer,
  PrimaryContainer,
  TextTitleContainer,
  TextTitleDashBoard,
} from "./styles";

const DashBoard = () => {
  const token = sessionStorage.getItem("token");

  const getAllServices = async () => {
    const servicosGetAll = await connect("servico", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return servicosGetAll;
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <FullPageMain>
      <DashBoardContainer>
        <TextTitleContainer>
          <TextTitleDashBoard>Bem vindo(a)!</TextTitleDashBoard>
        </TextTitleContainer>
        <PrimaryContainer></PrimaryContainer>
      </DashBoardContainer>
    </FullPageMain>
  );
};

export default DashBoard;
