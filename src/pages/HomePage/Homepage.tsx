import { FullPageMain } from "../../components/FullPageMain/FullPageMain";
import { Logo, LogoContainerHome } from "./styles";
import mainLogo from "../../img/Logo.png";

const Homepage = () => {
  return (
    <FullPageMain>
      <LogoContainerHome>
        <Logo src={mainLogo} />
      </LogoContainerHome>
    </FullPageMain>
  );
};

export default Homepage;
