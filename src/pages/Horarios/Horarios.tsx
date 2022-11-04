import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import {
  ButtonCancelOpenHour,
  ContainerTable,
  TableHeaderOpenHour,
  TableOpenHour,
  TableRowOpenHour,
  TBodyOpenHour,
  TColumnOpenHour,
  TRowOpenHour,
} from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { IconCancel } from "../../img/icones/IconCancel";

const Agendamento = () => {
  const token = sessionStorage.getItem("token");
  const [showLoader, setShowLoader] = useState(false);
  const user = sessionStorage.getItem("user");
  const userJson = JSON.parse(user ? user : "");
  const [infoOpenService, setInfoOpenService] = useState<any>();

  const getAllServicesEmployee = async () => {
    const services = await connect("reservas-abertas/empresa", "get", {
      headers: {
        userid: userJson._id,
        Authorization: `Bearer ${token}`,
      },
    });
    setInfoOpenService(services);
  };

  const handleCancelSchedules = async (value: string) => {
    await axios
      .put(
        `https://api-de-agenda.herokuapp.com/cancelar-reserva/${value}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Agendamento fechado com sucesso");
      });
  };

  useEffect(() => {
    getAllServicesEmployee();
  }, []);

  return (
    <FullPageMain loading={showLoader}>
      <ContainerTable>
        <TableOpenHour>
          <TableRowOpenHour>
            <TableHeaderOpenHour>Horario</TableHeaderOpenHour>
          </TableRowOpenHour>
          <TBodyOpenHour>
            {infoOpenService &&
              infoOpenService.map((result: any) => {
                var date = new Date(result.data_servico),
                  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                  day = ("0" + date.getDate()).slice(-2);
                const dateService = [day, mnth, date.getFullYear()].join("/");
                return (
                  <TRowOpenHour>
                    <TColumnOpenHour>
                      {dateService + " " + result.hora_servico}
                    </TColumnOpenHour>
                    <ButtonCancelOpenHour
                      onClick={() => handleCancelSchedules(result.servico)}
                    >
                      <IconCancel />
                    </ButtonCancelOpenHour>
                  </TRowOpenHour>
                );
              })}
          </TBodyOpenHour>
        </TableOpenHour>
      </ContainerTable>
    </FullPageMain>
  );
};

export default Agendamento;
