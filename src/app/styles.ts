// import { container } from "@/lib/shared/styles";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

export const Section = styled.section`
  ${container}
`

export const Hero = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
  padding: 120px 0;

  @media screen and (max-width: 850px) {
    padding: 60px 0;
    flex-direction: column-reverse;
  }
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 210px;
  display: flex;
  object-fit: contain;


  @media screen and (min-width: 500px) {
    max-width: 428px;
    max-height: 285px;
    & img {
      border-radius: 0.5em;
    }
  }

  @media screen and (min-width: 950px) {
    max-height: none;
    max-width: none;
    height: 292px;
  }

  @media screen and (min-width: 1100px) {
    height: 326px;
  }

  @media screen and (min-width: 1350px) {
    height: 426px;
  }
`

export const ContentMentor = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 350px;

  @media screen and (max-width: 850px) {
    padding: 60px 0;
    flex-direction: column;
  }
`
export const BoxGridContact = styled.div`
  display: grid;
  gap: 10px;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);

  #email, #message {
    grid-column: auto / span 2
  }

  @media screen and (max-width: 630px) {
    & {
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    }

    & > div {
      grid-column: auto / span 2
    }
  }
`