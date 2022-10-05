import { useState } from "react";
import { Button } from "../../components/Button/Button";
import RegisterPF from "./Register/RegisterPF";
import RegisterPJ from "./Register/RegisterPJ";

const RegisterMain = () => {
  const [registerClient, setRegisterClient] = useState<boolean>(true);
  return (
    <>
      {registerClient ? (
        <RegisterPF active={registerClient} setActive={setRegisterClient} />
      ) : (
        <RegisterPJ active={registerClient} setActive={setRegisterClient} />
      )}
    </>
  );
};

export default RegisterMain;
