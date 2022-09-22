import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { Logo, LogoContainerHome } from "./styles";
import mainLogo from "../../img/Logo.png";

const Agendamento = () => {
  console.log(localStorage.getItem("page"));
  return <FullPageMain>Agendamento</FullPageMain>;
};

export default Agendamento;
