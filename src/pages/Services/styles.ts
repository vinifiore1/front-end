import styled from "styled-components";

interface IPropsButton {
  disabled?: boolean;
}

export const ServicesContainer = styled.div`
  padding: 30px;
  max-height: 50px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 5px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

export const TextTitle = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #354f52;
`;

export const InputServiceName = styled.div`
  max-width: 500px;
  margin-top: 40px;
  padding-left: 30px;
`;

export const SelectContainerService = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 500px;
  height: 100px;
  grid-gap: 20px;
`;

export const SelectSchedulleService = styled.select`
  max-width: 500px;
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
export const PriceContainer = styled.div`
  padding: 30px;
`;

export const PriceContainerText = styled.div`
  padding: 10px;
  border-bottom: 1px solid #c4c4c4;
`;

export const TextTitlePrice = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #354f52;
`;

export const InputsContainer = styled.div`
  padding-top: 30px;
`;

export const ButtonContainerService = styled.button<IPropsButton>`
  background: ${(props) => (props.disabled ? "#ccc" : "#52796f")};
  border-radius: 3px;
  border: none;
  color: white;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 50px;
  width: 277px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;
