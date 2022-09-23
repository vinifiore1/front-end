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
