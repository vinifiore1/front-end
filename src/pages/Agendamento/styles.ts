import styled from "styled-components";

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
`;

export const OptionSchedulle = styled.option`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #354f52;
`;

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
