import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import {
  FormContainer,
  InputContainerSchedulle,
  OptionSchedulle,
  SelectContainer,
  SelectSchedulle,
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

  useEffect(() => {
    getAllServices();
  }, []);

  const getExcludedTimes = (date: any) => {
    let arrExcludedTimes = [];
    for (let i = 0; i < existsDate.length; i++) {
      arrExcludedTimes.push(
        setHours(
          setMinutes(new Date(), existsDate[i].hora_servico.slice(3, 5)),
          existsDate[i].hora_servico.slice(0, 2)
        )
      );

      setExcludedTimes(arrExcludedTimes);
    }
  };

  console.log(date, serviceHour);

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
          <DatePicker
            locale={"pt"}
            onChange={(e) => setDate(e)}
            onSelect={getExcludedTimes}
            selected={date}
            minDate={new Date()}
            dateFormat=" dd/MM/yyyy"
          />
          <DatePicker
            excludeTimes={excludedTimes}
            onChange={(e) => setServiceHour(e)}
            onSelect={getExcludedTimes}
            popperPlacement="top-start"
            showTimeSelect
            showTimeSelectOnly
            value=""
            timeIntervals={15}
            timeFormat="HH:mm"
            minTime={setHours(setMinutes(new Date(), 0), 8)}
            maxTime={setHours(setMinutes(new Date(), 0), 18)}
          />
        </InputContainerSchedulle>
      </FormContainer>
    </FullPageMain>
  );
};

export default Agendamento;
