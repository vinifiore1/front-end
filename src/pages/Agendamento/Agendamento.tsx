import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import {
  ButtonContainerScheddule,
  ButtonsContainer,
  CancelButton,
  ContainerSchedulle,
  FormContainer,
  InputContainerSchedulle,
  OptionSchedulle,
  SelectContainer,
  SelectSchedulle,
  TextContainerBold,
  TextContainerRegular,
  TextContainerSchedulle,
  TextContainerSub,
  TextFormSchedulle,
  TextSelect,
} from "./styles";
import DatePicker, { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt-BR";
import moment from "moment";

registerLocale("pt", pt);

const Agendamento = () => {
  const token = sessionStorage.getItem("token");
  const [services, setServices] = useState<any>([]);
  const [service, setService] = useState<any>([]);
  const [date, setDate] = useState<any>();
  const [excludedTimes, setExcludedTimes] = useState<any[]>();
  const [existsDate, setExistsDate] = useState<any[]>([]);
  const [serviceHour, setServiceHour] = useState<any>();
  const [funcionario, setFuncionario] = useState<any>({});
  const user = sessionStorage.getItem("user");
  const userJson = JSON.parse(user ? user : "");
  const [showLoader, setShowLoader] = useState(false);

  const getAllServices = async () => {
    const allServices = await connect("servico", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setServices(allServices);
  };

  const handleGetServiceInfo = async (value: string) => {
    const infoService = await connect("servico/find", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
        id: value,
      },
    });

    const scheduleOpen = await connect("reservas-abertas/empresa", "get", {
      headers: {
        Authorization: `Bearer ${token}`,
        userid: infoService.funcionario,
      },
    });
    const funcionario = await connect(
      `funcionario/${infoService.funcionario}`,
      "get",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setService(infoService);
    setFuncionario(funcionario);
    setExistsDate(scheduleOpen);
  };

  const getExcludedTimes = (date: any) => {
    let arrExcludedTimes = [];

    for (let i = 0; i < existsDate.length; i++) {
      const formatDate = moment(new Date(existsDate[i].data_servico)).format(
        "DD-MM-YYYY"
      );
      const selectedDate = moment(date).format("DD-MM-YYYY");
      if (selectedDate === formatDate) {
        arrExcludedTimes.push(
          new Date(
            Number(formatDate.slice(6, 10)),
            Number(formatDate.slice(3, 5)),
            Number(formatDate.slice(0, 2)),
            existsDate[i].hora_servico.slice(0, 2),
            existsDate[i].hora_servico.slice(3, 5)
          )
        );
      }
      setExcludedTimes(arrExcludedTimes);
    }
  };

  const doSchedulle = async () => {
    setShowLoader(true);
    const newSchedulle = await connect(
      "reserva",
      "post",
      {
        tipo: "1",
        funcionario: service.funcionario,
        userId: userJson._id,
        servico: service._id,
        data_servico: date,
        hora_servico: moment(new Date(serviceHour)).format("HH:mm"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (newSchedulle) {
      setShowLoader(false);
      setDate("");
      setServiceHour("");
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <FullPageMain loading={showLoader}>
      <FormContainer>
        <SelectContainer>
          <TextSelect>Agendamento para: </TextSelect>
          <SelectSchedulle
            name="services"
            id="select-services"
            onChange={(e) => handleGetServiceInfo(e.target.value)}
          >
            <OptionSchedulle value={undefined}>
              Selecione um serviço
            </OptionSchedulle>
            {services.map((result: any) => (
              <OptionSchedulle value={result._id}>
                {result.tipo}
              </OptionSchedulle>
            ))}
          </SelectSchedulle>
        </SelectContainer>
        <InputContainerSchedulle>
          <TextFormSchedulle>Selecione a data desejada:</TextFormSchedulle>
          <DatePicker
            locale={"pt"}
            onChange={(e) => setDate(e)}
            onSelect={getExcludedTimes}
            selected={date}
            minDate={new Date()}
            dateFormat=" dd/MM/yyyy"
            placeholderText="dd/mm/aaaa"
          />
          <TextFormSchedulle>Selecione a hora desejada:</TextFormSchedulle>
          <DatePicker
            excludeTimes={excludedTimes}
            onChange={(e) => setServiceHour(e)}
            onSelect={getExcludedTimes}
            popperPlacement="top-start"
            showTimeSelect
            showTimeSelectOnly
            selected={serviceHour}
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="hh:mm aa"
            minTime={setHours(setMinutes(new Date(), 0), 8)}
            maxTime={setHours(setMinutes(new Date(), 0), 18)}
            placeholderText="hh:mm"
          />
        </InputContainerSchedulle>
      </FormContainer>
      <ContainerSchedulle>
        <TextContainerSchedulle>Dados do paciente</TextContainerSchedulle>
        <TextContainerSub>
          <TextContainerBold>Nome:</TextContainerBold>
          <TextContainerRegular>{userJson.nome}</TextContainerRegular>
        </TextContainerSub>
        <TextContainerSub>
          <TextContainerBold>Telefone:</TextContainerBold>
          <TextContainerRegular>{userJson.telefone}</TextContainerRegular>
        </TextContainerSub>
        <div style={{ marginBottom: "30px" }}></div>
        <TextContainerSchedulle>Dados da consulta</TextContainerSchedulle>
        {date && (
          <TextContainerSub>
            <TextContainerBold>Data:</TextContainerBold>
            <TextContainerRegular>
              {moment(new Date(date)).format("DD/MM/YYYY")}
            </TextContainerRegular>
          </TextContainerSub>
        )}
        {serviceHour && (
          <TextContainerSub>
            <TextContainerBold>Hora:</TextContainerBold>
            <TextContainerRegular>
              {moment(new Date(serviceHour)).format("HH:mm")}
            </TextContainerRegular>
          </TextContainerSub>
        )}
        <div style={{ marginBottom: "30px" }}></div>
        <TextContainerSchedulle>Dados do pagamento</TextContainerSchedulle>
        {funcionario.pix !== undefined && (
          <TextContainerSub>
            <TextContainerBold>Pix:</TextContainerBold>
            <TextContainerRegular>{funcionario.pix}</TextContainerRegular>
          </TextContainerSub>
        )}
        <ButtonsContainer>
          <CancelButton
            onClick={() => {
              setShowLoader(false);
              setDate("");
              setServiceHour("");
            }}
          >
            Cancelar
          </CancelButton>
          <ButtonContainerScheddule
            onClick={doSchedulle}
            disabled={!date || !serviceHour || !funcionario || !service}
          >
            Finalizar agendamento
          </ButtonContainerScheddule>
        </ButtonsContainer>
      </ContainerSchedulle>
    </FullPageMain>
  );
};

export default Agendamento;
