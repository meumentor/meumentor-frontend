"use client";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

const Main = styled.main`${container}`
export default function TermsForUse() {
  return (
    <>
      <TopBar />
      <Main>
        <h2 style={{ margin: '25px 0'}}>Termos de Uso</h2>
      </Main>
    </>
  );
}
