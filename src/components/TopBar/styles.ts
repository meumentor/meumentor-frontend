"use client";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

export const BoxMenu = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  @media screen and (min-width: 949px) {
    .icon-menu {
      visibility: hidden;
      display: none;
    }
  }

  @media screen and (max-width: 950px) {
    & {
      padding: 4px 10px;
      flex-direction: row-reverse;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  flex: 1 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & ul {
    margin: 0;
    align-items: center;
    padding-inline-start: 0px;
    list-style: none;
    display: flex;
    gap: 20px;
  }
`;