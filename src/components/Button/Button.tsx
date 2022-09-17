//***** NOVO STYLE GUIDE *****//
import React, { Fragment, ReactNode, useMemo } from "react";
import {
  AdminButtonContainer,
  AdminButtonIconContainer,
  AdminButtonLabel,
  AdminLabelBold,
} from "./styles";
interface IAdminButtonProps {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (e?: any) => void;
  highlightLabelText?: string;
}

export const Button = ({
  id,
  label = "",
  disabled,
  icon,
  onClick,
  highlightLabelText,
}: IAdminButtonProps) => {
  const labelStyles = useMemo(() => {
    let listedLabel: string[] = label.split(" ");
    let listedHighlightedLabel: string[] = highlightLabelText
      ? highlightLabelText.split(" ")
      : [];
    return listedLabel.map((item) => {
      if (item === listedHighlightedLabel.find((subitem) => subitem === item)) {
        return <AdminLabelBold key={item}>{item} </AdminLabelBold>;
      }
      return <Fragment key={item}>{item} </Fragment>;
    });
  }, [label, highlightLabelText]);

  return (
    <AdminButtonContainer
      id={id}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      className={"admin-" + " " + (disabled ? "disabled " : " ")}
    >
      {icon ? (
        <AdminButtonIconContainer id={id + "-icon"}>
          {icon}
        </AdminButtonIconContainer>
      ) : (
        ""
      )}
      <AdminButtonLabel id={id + "-label"}>{labelStyles}</AdminButtonLabel>
    </AdminButtonContainer>
  );
};
