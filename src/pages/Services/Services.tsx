import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { Input } from "../../components/Input/Input";
import { InputRadio } from "../../components/InputRadio/InputRadio";
import {
  ButtonContainerScheddule,
  ButtonsContainer,
  CancelButton,
  OptionSchedulle,
} from "../Agendamento/styles";
import {
  ButtonContainerService,
  InputsContainer,
  InputServiceName,
  PriceContainer,
  PriceContainerText,
  SelectContainerService,
  SelectSchedulleService,
  ServicesContainer,
  TextTitle,
  TextTitlePrice,
  TitleContainer,
} from "./styles";

const Services = () => {
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [servicesInfo, setServicesInfo] = useState<any>({});
  const [funcionario, setFuncionario] = useState<any>();
  const [time, setTime] = useState("");
  const [serviceTime, setServiceTime] = useState("");

  const getFuncinario = async () => {
    const employee = await connect("funcionario", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setFuncionario(employee);
  };

  useEffect(() => {
    getFuncinario();
  }, []);

  useEffect(() => {
    if (time === "time") {
      setServicesInfo({ ...servicesInfo, time: serviceTime });
    }
  }, [time]);

  const doNewService = async () => {
    setLoading(true);
    const newService = await connect(
      "servico",
      "post",
      {
        funcionario: servicesInfo.funcionario,
        time: servicesInfo.time,
        price: servicesInfo.price,
        tipo: servicesInfo.tipo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (newService) {
      setLoading(false);
    }
  };

  return (
    <FullPageMain loading={loading}>
      <ServicesContainer>
        <TitleContainer>
          <TextTitle>Serviços Prestados</TextTitle>
        </TitleContainer>
        <InputServiceName>
          <Input
            id="input-service-name"
            label="Serviço"
            placeholder="Serviço prestado"
            width="500px"
            onChange={(e) =>
              setServicesInfo({ ...servicesInfo, tipo: e.target.value })
            }
            value={servicesInfo.tipo}
          />
        </InputServiceName>
        {funcionario && (
          <SelectContainerService>
            <TextTitle>Escolha o funcionario: </TextTitle>
            <SelectSchedulleService
              name="services"
              id="select-services"
              onChange={(e) => {
                setServicesInfo({
                  ...servicesInfo,
                  funcionario: e.target.value,
                });
              }}
            >
              <OptionSchedulle value={undefined}>
                Selecione um funcionario
              </OptionSchedulle>
              {funcionario.map((result: any) => (
                <OptionSchedulle value={result._id}>
                  {result.nome}
                </OptionSchedulle>
              ))}
            </SelectSchedulleService>
          </SelectContainerService>
        )}
        <PriceContainer>
          <PriceContainerText>
            <TextTitlePrice>Tipo de cobrança: </TextTitlePrice>
          </PriceContainerText>
          <InputsContainer>
            <InputRadio
              label="hora"
              id="hour-service"
              onChange={() => setTime("time")}
              checked={time === "time"}
            />
            <InputRadio
              label="consulta"
              id="hour-service"
              onChange={() => setTime("consulta")}
              checked={time === "consulta"}
            />
            {time === "time" && (
              <Input
                id="time"
                label="Digite a duração do serviço:"
                onChange={(e) => setServiceTime(e.target.value)}
                placeholder={"duração do serviço em horas"}
                value={serviceTime}
              />
            )}
            <Input
              id="price"
              label="Digite o valor do serviço:"
              onChange={(e) =>
                setServicesInfo({ ...servicesInfo, price: e.target.value })
              }
              value={servicesInfo.price}
              placeholder={"Valor do serviço"}
            />
          </InputsContainer>
        </PriceContainer>
        <ButtonsContainer>
          <CancelButton
            onClick={() => {
              setLoading(false);
              setTime("");
              setServiceTime("");
              setServicesInfo({ tipo: "", funcionario: "", price: "" });
            }}
          >
            Cancelar
          </CancelButton>
          <ButtonContainerService onClick={doNewService}>
            Salvar
          </ButtonContainerService>
        </ButtonsContainer>
      </ServicesContainer>
    </FullPageMain>
  );
};

export default Services;
