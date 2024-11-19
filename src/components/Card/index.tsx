import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div<{ $css?: SerializedStyles}>`
  border-radius: 0.4em;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  ${attr => attr?.$css ?? ''}
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
`;

interface ICard extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  $css?: SerializedStyles
}

export default function Card(props: ICard) {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
}
