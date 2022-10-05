import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import Avatar from "../../components/Avatar/Avatar";
import ButtonRegister from "../../components/ButtonRegister/ButtonRegister";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { ButtonRegisterIcon } from "../../img/icones/ButtonRegisterIcon";

import {
  AddressContainer,
  CardContainerInfoDashBoard,
  CardImageDashBoard,
  CardNameDashBoard,
  CardPriceDashboard,
  CardServiceDashBoard,
  ContainerItens,
  ContainerMapText,
  ContainerPadding,
  ContainerText,
  ContainerTextSecondary,
  ContainerWrapper,
  DashBoardContainer,
  PrimaryContainer,
  SecondaryContainer,
  TableDashBoard,
  TableHeaderDashBoard,
  TableHeaderDashBoardButton,
  TableRowDashBoard,
  TBodyDashboard,
  TColumnDashboard,
  TColumnDashboardIcon,
  TextAddress,
  TextAddressContainer,
  TextAddressTitle,
  TextContainer,
  TextTitleContainer,
  TextTitleDashBoard,
  ThirdContainer,
  TRowDashboard,
} from "./styles";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import { IconCancel } from "../../img/icones/IconCancel";
import { IconLocalization } from "../../img/icones/IconLocalization";

const DashBoard = () => {
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<any[]>();
  const [history, setHistory] = useState<any[]>();
  const [schedulle, setSchedulle] = useState<any[]>();
  const [position, setPosition] = useState<any>();
  const [userAddress, setUserAddress] = useState<any>(null);

  const containerStyle = {
    width: "422px",
    height: "336px",
  };

  const getAllServices = async () => {
    const servicosGetAll = await connect("servico", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setServices(servicosGetAll);
  };

  const getAllScheduling = async () => {
    setLoading(true);
    const agendamentoGetAll = await connect("historico", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSchedulle(agendamentoGetAll);
  };

  const getRoute = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCX3otK-A-WOv-79eEmz3QdteBKaVNU4Kg`
        )
        .then((result) => {
          setUserAddress(result.data.results[0].formatted_address);
        });

      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    const filteredHistory: any[] = [];
    if (schedulle && services) {
      schedulle.map((result) => {
        services.filter((item) => {
          if (item._id === result.servico) {
            filteredHistory.push({
              tipo: item.tipo,
              data_servico: result.data_servico,
              hora_servico: result.hora_servico,
            });
          }
        });
      });
      setHistory(filteredHistory);
    }
  }, [services, schedulle]);

  useEffect(() => {
    getRoute();
    getAllServices();
    getAllScheduling();
  }, []);
  return (
    <FullPageMain loading={loading}>
      <DashBoardContainer>
        <TextTitleContainer>
          <TextTitleDashBoard>Bem vindo(a)!</TextTitleDashBoard>
        </TextTitleContainer>
        <ContainerWrapper>
          <PrimaryContainer>
            <ContainerText>Profissionais</ContainerText>
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
          <ContainerItens>
            <SecondaryContainer>
              <ContainerPadding>
                <ContainerTextSecondary>
                  Meus agendamentos
                </ContainerTextSecondary>
                <TableDashBoard>
                  <TableRowDashBoard>
                    <TableHeaderDashBoard>Serviço</TableHeaderDashBoard>
                    <TableHeaderDashBoard>Data/Hora</TableHeaderDashBoard>
                    <TableHeaderDashBoard>Clínica</TableHeaderDashBoard>
                    <TableHeaderDashBoardButton>
                      Cancelar
                    </TableHeaderDashBoardButton>
                  </TableRowDashBoard>
                  <TBodyDashboard>
                    {history &&
                      history.map((item, index) => {
                        var date = new Date(item.data_servico),
                          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                          day = ("0" + date.getDate()).slice(-2);
                        const dateService = [
                          day,
                          mnth,
                          date.getFullYear(),
                        ].join("/");
                        return (
                          <TRowDashboard>
                            <TColumnDashboard>{item.tipo}</TColumnDashboard>
                            <TColumnDashboard>
                              {dateService + " " + item.hora_servico}
                            </TColumnDashboard>
                            <TColumnDashboard>Clinica Geral</TColumnDashboard>
                            <TColumnDashboardIcon>
                              <IconCancel />
                            </TColumnDashboardIcon>
                          </TRowDashboard>
                        );
                      })}
                  </TBodyDashboard>
                </TableDashBoard>
              </ContainerPadding>
            </SecondaryContainer>
            <ThirdContainer>
              <ContainerPadding>
                <ContainerTextSecondary>
                  Rota para clínica
                  <ContainerMapText>
                    <TextAddressContainer>
                      <TextContainer>
                        <TextAddressTitle>Sua localização</TextAddressTitle>
                        <AddressContainer>
                          <IconLocalization />
                          <TextAddress>{userAddress}</TextAddress>
                        </AddressContainer>
                      </TextContainer>
                      <TextContainer>
                        <TextAddressTitle>Clínica Geral</TextAddressTitle>
                        <AddressContainer>
                          <IconLocalization />
                          <TextAddress>
                            Av. da Saudade, 306 - Jardim Jurumirim, Piraju - SP,
                            18800-000
                          </TextAddress>
                        </AddressContainer>
                      </TextContainer>
                    </TextAddressContainer>
                    <LoadScript
                      onLoad={() => setLoading(false)}
                      googleMapsApiKey="AIzaSyCX3otK-A-WOv-79eEmz3QdteBKaVNU4Kg"
                    >
                      <GoogleMap
                        center={position}
                        zoom={14}
                        mapContainerStyle={containerStyle}
                      >
                        <MarkerF position={position} />
                        <MarkerF
                          position={{ lat: -23.1976832, lng: -49.3822079 }}
                        />
                      </GoogleMap>
                    </LoadScript>
                  </ContainerMapText>
                </ContainerTextSecondary>
              </ContainerPadding>
            </ThirdContainer>
          </ContainerItens>
        </ContainerWrapper>
      </DashBoardContainer>
    </FullPageMain>
  );
};

export default DashBoard;
