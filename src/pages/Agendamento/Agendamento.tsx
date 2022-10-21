import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import {
  FormContainer,
  InputContainerSchedulle,
  OptionSchedulle,
  SelectContainer,
  SelectSchedulle,
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
  const [scheduling, setScheduling] = useState<any>({});
  const [date, setDate] = useState<any>();
  const [excludedTimes, setExcludedTimes] = useState<any[]>();
  const [existsDate, setExistsDate] = useState<any[]>([]);
  const [serviceHour, setServiceHour] = useState<any>();

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

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <FullPageMain>
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
            placeholderText="hh/mm"
          />
        </InputContainerSchedulle>
      </FormContainer>
    </FullPageMain>
  );
};

export default Agendamento;
