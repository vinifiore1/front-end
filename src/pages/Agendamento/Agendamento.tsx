import { useEffect, useState } from "react";
import { connect } from "../../api/connect";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";

const Agendamento = () => {
  const token = sessionStorage.getItem("token");
  const [services, setServices] = useState<any>([]);
  const [scheduling, setScheduling] = useState<any>({});

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
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <FullPageMain>
      <select
        name="services"
        id="select-services"
        onChange={(e) => handleGetServiceInfo(e.target.value)}
      >
        {services.map((result: any) => (
          <option value={result._id}>{result.tipo}</option>
        ))}
      </select>
    </FullPageMain>
  );
};

export default Agendamento;
