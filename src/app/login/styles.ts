import Card from "@/components/Card";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

export const SectionLogin =styled.main`
 ${container}
  padding: 15px;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardLogin = styled(Card)`
  display: flex;
  height: calc(100% - 200px);
  min-height: max-content;
  border-radius: 0.4em;
  margin: 15px;

  & .side-image {
    flex-basis: 50%;
    background: var(--gray700);
    border-radius: 0.42em 0 0 0.42em;
    position: relative;
    object-fit: contain;
    overflow: hidden;
  }
  
  & .side-form {
    padding: 30px 15px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 950px) {
    .side-image {
      display: none;
    }

    .side-form {
      flex-basis: 100%;
    }
  }
`

export const RowLogin = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`