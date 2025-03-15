"use client";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

const Main = styled.main`
  ${container}
`;

export default function Mentorado() {
  return (
    <>
      <TopBar />
      <Main>
        <section style={{ margin: "15px 0" }}>
          <h2 style={{ textAlign: "center" }}>Cadastro de Mentorado</h2>

        </section>
      </Main>
      <Footer />
    </>
  );
}
