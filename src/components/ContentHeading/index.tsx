import * as S from "./ContentHeading.styles";

import React from "react";

export type ContentHeadingProps = {
  children: React.ReactNode;
};

const ContentHeading = ({ children, ...props }: ContentHeadingProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);

export { ContentHeading };
