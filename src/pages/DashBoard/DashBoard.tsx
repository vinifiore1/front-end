import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { Logo, LogoContainerHome } from "./styles";
import mainLogo from "../../img/Logo.png";

const DashBoard = () => {
  console.log(localStorage.getItem("page"));
  return (
    <FullPageMain>
      <LogoContainerHome>
        <Logo src={mainLogo} />
      </LogoContainerHome>
    </FullPageMain>
  );
};

export default DashBoard;
