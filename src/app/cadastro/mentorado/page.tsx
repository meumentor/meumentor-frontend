"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Main = styled.main`
  ${container}
`;

const styles = css`
  padding: 3em 2.5em;

  @media screen and (max-width: 450px) {
    padding: 3em 1.5em;
  }
`;


const Container = styled.div`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 650px) {
    grid-template: auto / repeat(1, 1fr);
  }
`;


export default function Mentorado() {
  return (
    <>
      <TopBar />
      <Main>
        <section
          style={{ margin: "15px 0", minHeight: "calc(100dvh - 265px)" }}
        >
          <Card $css={styles}>
            <form action="">
              <h2 style={{ textAlign: "center" }}>Cadastro de Mentorado</h2>

              <p
                style={{
                  fontSize: "1.4em",
                  color: "#3f3f3f",
                  margin: "10px 0",
                }}
              >
                Informações Pessoais
              </p>
              <Container>
                <Input
                  label="Nome"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
                <Input
                  label="Sobrenome"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
                <Input
                  label="E-mail"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
                <Input
                  label="Telefone"
                  layout="placeholder"
                  options={{
                    mask: "(__) _.____-____",
                    replacement: { _: /\d/ },
                  }}
                  container={{ style: { width: "100%" } }}
                />
                <Input
                  label="LinkedIn"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
                <Input
                  label="Instagram"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
              </Container>

              <button
                type="submit"
                style={{
                  marginTop: 15,
                  fontSize: "1.2em",
                  borderRadius: "0.3em",
                  padding: "0.45em 1em",
                  background: "#333333",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                }}
              >
                Enviar
              </button>
            </form>
          </Card>
        </section>
      </Main>
      <Footer />
    </>
  );
}
