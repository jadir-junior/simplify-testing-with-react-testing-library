import * as S from "./Checkbox.styles";

import React, { InputHTMLAttributes } from "react";

export type CheckboxProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, ...props }: CheckboxProps) => (
  <S.Wrapper>
    <S.Input {...props} type="checkbox" id={label} />
    {label && <S.Label htmlFor={label}>{label}</S.Label>}
  </S.Wrapper>
);

export { Checkbox };
