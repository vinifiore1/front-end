import { useEffect, useState } from "react";
import { connect } from "../../../api/connect";
import { FullPageNotAuth } from "../../../components/FullPageNotAuth/FullPageNotAuth";
import { CheckRegister } from "../../../img/CheckRegister";
import {
  ContainerMainText,
  ContainerRegisterSuccess,
  ContainerTextSecondary,
} from "../styles/styles";

const RegisterSuccess = () => {
  const [loading, setLoading] = useState(false);

  const doLogin = async () => {
    const user = sessionStorage.getItem("username");
    const pass = sessionStorage.getItem("password");
    const body = { cpf: user, senha: pass };
    const clientConnect = await connect("autenticacao-cliente", "post", body);

    if (clientConnect.code === "ERR_BAD_RESPONSE") {
      const businessConnect = await connect(
        "autenticacao-funcionario",
        "post",
        body
      );
      if (businessConnect.code === "ERR_BAD_RESPONSE") {
        setLoading(false);
      } else {
        setLoading(false);
        sessionStorage.setItem("token", businessConnect.token);
        window.location.assign("/home");
      }
    } else {
      setLoading(false);
      sessionStorage.setItem("token", clientConnect.token);
      window.location.assign("/home");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      doLogin();
    }, 10000);
  }, []);

  return (
    <FullPageNotAuth loading={loading}>
      <ContainerRegisterSuccess>
        <CheckRegister />
        <ContainerMainText>Cadastro realizado com sucesso!!</ContainerMainText>
        <ContainerTextSecondary>
          Você será redirecionado para nosso dashboard em alguns segundos
        </ContainerTextSecondary>
      </ContainerRegisterSuccess>
    </FullPageNotAuth>
  );
};

export default RegisterSuccess;
