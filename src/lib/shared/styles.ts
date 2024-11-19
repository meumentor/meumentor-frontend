import { css } from "@emotion/react";

export const container = css`
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: 500px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 950px) {
    width: 900px;
  }

  @media screen and (min-width: 1100px) {
    width: 1000px;
  }

  @media screen and (min-width: 1350px) {
    width: 1300px;
  }
`