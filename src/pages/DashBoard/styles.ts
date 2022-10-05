import styled from "styled-components";

export const TextTitleContainer = styled.div`
  display: flex;
`;

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  padding-left: 31px;
  padding-bottom: 42px;
  grid-gap: 41px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  grid-gap: 43px;
`;

export const PrimaryContainer = styled.div`
  width: 379px;
  height: 776px;
  background: #ffffff;
  border: 1px solid #cad2c5;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const SecondaryContainer = styled.div`
  width: 695px;
  height: 375px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
  margin-bottom: 26px;
`;

export const ThirdContainer = styled.div`
  max-width: 720px;
  max-height: 375px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
`;

export const TextTitleDashBoard = styled.div`
  font-family: "Ubuntu";
  font-style: bold;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #354f52;
`;

export const CardServiceDashBoard = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 335px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #cad2c5;
`;

export const CardNameDashBoard = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #354f52;
`;

export const CardImageDashBoard = styled.div`
  width: 60px;
  height: 70px;
  border-radius: 3px;
`;

export const CardPriceDashboard = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  line-height: 10px;
  color: #354f52;
`;

export const CardContainerInfoDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 80px;
  width: 71px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerText = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #354f52;
  width: 335px;
`;

export const ContainerTextSecondary = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #354f52;
  width: 335px;
  display: flex;
  flex-direction: column;
`;

export const TextAddressContainer = styled.span``;

export const TextAddress = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #84a98c;
  color: #84a98c;
  max-width: 150px;
`;

export const ContainerMapText = styled.div`
  display: flex;
  width: 695px;
  align-items: center;
  grid-gap: 20px;
`;

export const ContainerPadding = styled.div`
  padding: 15px;
`;

export const TextAddressTitle = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #354f52;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 11px;
  border-bottom: 1px solid #cad2c5;
  padding: 11px;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TableDashBoard = styled.table`
  display: table;
  margin-top: 21px;
  border-collapse: collapse;
  width: 100%;
`;

export const TBodyDashboard = styled.tbody``;

export const TableRowDashBoard = styled.tr`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
`;

export const TRowDashboard = styled.tr`
  :nth-of-type(2n + 1) {
    background: #d9d9d9;
  }
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #354f52;
`;

export const TableHeaderDashBoard = styled.th`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #52796f;
  text-align: start;
  padding: 7px;
`;

export const TableHeaderDashBoardButton = styled.th`
  background-clip: padding-box;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #52796f;
  text-align: center;
  padding: 7px;
`;

export const TColumnDashboard = styled.td`
  padding: 7px;
`;

export const TColumnDashboardIcon = styled.td`
  padding: 7px 7px 7px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
