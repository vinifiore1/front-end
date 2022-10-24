import styled from "styled-components";

interface IPropsButton {
  disabled?: boolean;
}

export const LogoContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const SelectContainer = styled.div`
  display: flex;
  grid-gap: 15px;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const SelectSchedulle = styled.select`
  max-width: 200px;
  height: 40px;
  background: none;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
  padding: 10px;
`;

export const OptionSchedulle = styled.option``;

export const TextSelect = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 16px;
  color: #84a98c;
`;

export const InputContainerSchedulle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  grid-gap: 20px;
  input {
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    font-family: "Ubuntu";
    color: #354f52;
    height: 40px;
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
`;

export const DateInputSchedulle = styled.input``;

export const TextFormSchedulle = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
`;

export const ContainerSchedulle = styled.div`
  background: #efefef;
  border-radius: 5px;
  width: 428px;
  height: 500px;
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TextContainerSchedulle = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #354f52;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const TextContainerRegular = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #354f52;
`;

export const TextContainerBold = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #354f52;
`;

export const TextContainerSub = styled.div`
  display: flex;
  grid-gap: 10px;
  padding-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
  height: 100%;
`;

export const ButtonContainerScheddule = styled.button<IPropsButton>`
  background: ${(props) => (props.disabled ? "#ccc" : "#52796f")};
  border-radius: 3px;
  border: none;
  color: white;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 20px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

export const CancelButton = styled.button`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  background: none;
  border: none;
  color: #9d0208;
  cursor: pointer;
`;
