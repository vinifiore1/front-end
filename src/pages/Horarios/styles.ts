import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 695px;
  height: 375px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
  margin: 30px;
`;

export const TableOpenHour = styled.table`
  display: table;
  margin-top: 21px;
  border-collapse: collapse;
  width: 100%;
`;

export const TBodyOpenHour = styled.tbody``;

export const TableRowOpenHour = styled.tr`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
  text-align: center;
`;

export const TRowOpenHour = styled.tr`
  :nth-of-type(2n + 1) {
    background: #d9d9d9;
  }
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
  text-align: center;
`;

export const TableHeaderOpenHour = styled.th`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #52796f;
  text-align: center;
  padding: 7px;
`;

export const TColumnOpenHour = styled.td`
  padding: 7px;
`;

export const ButtonCancelOpenHour = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
