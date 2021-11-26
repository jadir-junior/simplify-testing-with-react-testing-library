import * as S from "./Input.styles";

import React, { InputHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, ...props }: InputProps) => (
  <S.Wrapper>
    {label && <S.Label htmlFor={label}>{label}</S.Label>}
    <S.Input {...props} id={label} />
  </S.Wrapper>
);

export { Input };
