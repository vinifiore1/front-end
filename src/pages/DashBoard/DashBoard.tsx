import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import Avatar from "../../components/Avatar/Avatar";
import ButtonRegister from "../../components/ButtonRegister/ButtonRegister";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { ButtonRegisterIcon } from "../../img/icones/ButtonRegisterIcon";
import {
  CardContainerInfoDashBoard,
  CardImageDashBoard,
  CardNameDashBoard,
  CardPriceDashboard,
  CardServiceDashBoard,
  DashBoardContainer,
  PrimaryContainer,
  TextTitleContainer,
  TextTitleDashBoard,
} from "./styles";

const DashBoard = () => {
  const token = sessionStorage.getItem("token");
  const [services, setServices] = useState<any[]>();

  const getAllServices = async () => {
    const servicosGetAll = await connect("servico", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setServices(servicosGetAll);
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
        <PrimaryContainer>
          {services &&
            services.map((item, index) => (
              <CardServiceDashBoard key={index}>
                <CardImageDashBoard>
                  <Avatar type={item.tipo.toLowerCase()} />
                </CardImageDashBoard>
                <CardContainerInfoDashBoard>
                  <CardNameDashBoard>{item.tipo}</CardNameDashBoard>
                  <CardPriceDashboard>
                    {item.price} • Consulta
                  </CardPriceDashboard>
                </CardContainerInfoDashBoard>
                <ButtonRegister
                  icon={<ButtonRegisterIcon />}
                  label={"Agendar"}
                />
              </CardServiceDashBoard>
            ))}
        </PrimaryContainer>
      </DashBoardContainer>
    </FullPageMain>
  );
};

export default DashBoard;
