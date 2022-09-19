//***** NOVO STYLE GUIDE *****//
import React, { Fragment, ReactNode, useMemo } from "react";

import {
  AdminLabelBold,
  AdminLabelContainer,
  AdminInputMain,
  AdminSpanEndAdorment,
  AdminSpanLabel,
  AdminRequiredInput,
  AdminSpanBottomAdorment,
  AdminError,
} from "./styles";

interface IAdminInputProps {
  id: string;
  label: string;
  highlightLabelText?: string;
  value?: string;
  name?: string;
  width?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  isRequired?: boolean;
  endAdornment?: ReactNode;
  bottomAdornment?: ReactNode;
  type?: "text" | "email" | "tel" | "number" | "password" | "date";
  onChange?: (value?: any) => void;
  onBlur?: (value?: any) => void;
  onFocus?: (value?: any) => void;
  onKeyPress?: (value?: any) => void;
  placeholder?: string;
  dataMask?: string;
  error?: boolean;
  erroMessage?: string;
}

export const Input = ({
  id,
  label,
  highlightLabelText,
  value,
  name,
  width,
  minLength,
  maxLength,
  disabled,
  isRequired,
  endAdornment,
  bottomAdornment,
  type,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
  placeholder,
  dataMask,
  error,
  erroMessage,
}: IAdminInputProps) => {
  // no state used
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
    <AdminLabelContainer
      id={
        id +
        "-label" +
        (value !== "" ? "-filled" : "") +
        (disabled ? "-disabled" : "")
      }
      width={width}
      htmlFor={id}
      disabled={disabled ? true : false}
    >
      <AdminSpanLabel id={id + "-span-label"} value={value ? true : false}>
        {isRequired ? <AdminRequiredInput>*</AdminRequiredInput> : ""}
        {labelStyles}
      </AdminSpanLabel>
      <AdminInputMain
        id={id}
        required={isRequired ? isRequired : false}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        value={value}
        width={width}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        data-mask={dataMask}
        error={error}
        erroMessage={erroMessage}
      />

      {endAdornment && (
        <AdminSpanEndAdorment>{endAdornment}</AdminSpanEndAdorment>
      )}
      {bottomAdornment && (
        <AdminSpanBottomAdorment>{bottomAdornment}</AdminSpanBottomAdorment>
      )}
      {error && <AdminError>{erroMessage}</AdminError>}
    </AdminLabelContainer>
  );
};
