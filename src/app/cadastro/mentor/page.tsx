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

// const Section = styled.section`
//   display: grid;
//   grid-template: auto / repeat(3, 1fr);
//   gap: 15px;

//   @media screen and (max-width: 1000px) {
//     grid-template: auto / repeat(2, 1fr);

//     & div:last-child {
//       grid-column: auto / span 2;
//     }
//   }

//   @media screen and (max-width: 650px) {
//     grid-template: auto / repeat(1, 1fr);

//     & div:last-child {
//       grid-column: auto;
//     }
//   }
// `;

const Container = styled.div`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 650px) {
    grid-template: auto / repeat(1, 1fr);
  }
`;

const styles = css`
  padding: 3em 2.5em;

  @media screen and (max-width: 450px) {
    padding: 3em 1.5em;
  }
`;

// const cards = [
//   {
//     title: "Requisitos para ser mentor de carreira:",
//     items: [
//       "Possuir pelo menos uma graduação e uma pós-graduação;",
//       "Exercer ou ter exercido cargo de liderança (de gerente ou superior)",
//       "Ter pelo menos 5 anos de experiência na área;",
//       "Possuir disponibilidade de horário.",
//     ],
//   },
//   {
//     title: "Requisitos para ser mentor de negócios:",
//     items: [
//       "Ter um negócio de sucesso que fatura pelo menos R$360 mil por mês;",
//       "Disponibilidade de horário.",
//     ],
//   },
//   {
//     title: "Requisitos para ser mentor acadêmico:",
//     items: [
//       "Possuir pelo menos mestrado;",
//       "Atuar ou ter atuado como professor e/ou pesquisador há pelo menos 5 anos;",
//       "Disponibilidade de horário.",
//     ],
//   },
// ];

// const salt = new Date().getTime().toString(16).substring(0, 4);

export default function Mentor() {
  return (
    <>
      <TopBar />
      <Main>
        <section
          style={{ margin: "15px 0", minHeight: "calc(100dvh - 265px)" }}
        >
          <Card $css={styles}>
            <form action="">
              <h2 style={{ textAlign: "center" }}>Cadastro de Mentor</h2>

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

              <p
                style={{
                  fontSize: "1.4em",
                  color: "#3f3f3f",
                  margin: "10px 0",
                }}
              >
                Informações Profissionais
              </p>
              <div className="d-flex flex-column" style={{ gap: 20 }}>
                <div>
                  <label htmlFor="curriculo" className="form-label">
                    Currículo
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="curriculo"
                    accept=".pdf,.png,.jgp"
                  />
                </div>
                <Input
                  label="Lattes"
                  layout="placeholder"
                  container={{ style: { width: "100%" } }}
                />
              </div>

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

          {/* <Section style={{ marginTop: 30 }}>
            {cards.map((item, i) => (
              <Card key={`card-${i}-${salt}`} style={{ padding: "2em 1.4em" }}>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((el, index) => (
                    <li key={`card-item-${i}-${index}-${salt}`}>{el}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </Section> */}
        </section>
      </Main>
      <Footer />
    </>
  );
}
