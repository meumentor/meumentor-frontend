"use client";
import Card from "@/components/Card";
import Input from "@/components/Input";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

const Main = styled.main`
  ${container}
`;

const Section = styled.section`
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: 15px;

  @media screen and (max-width: 1000px) {
    grid-template: auto / repeat(2, 1fr);

    & div:last-child {
      grid-column: auto / span 2;
    }
  }

  @media screen and (max-width: 650px) {
    grid-template: auto / repeat(1, 1fr);

    & div:last-child {
      grid-column: auto;
    }
  }
`;

const cards = [
  {
    title: "Requisitos para ser mentor de carreira:",
    items: [
      "Possuir pelo menos uma graduação e uma pós-graduação;",
      "Exercer ou ter exercido cargo de liderança (de gerente ou superior)",
      "Ter pelo menos 5 anos de experiência na área;",
      "Possuir disponibilidade de horário.",
    ],
  },
  {
    title: "Requisitos para ser mentor de negócios:",
    items: [
      "Ter um negócio de sucesso que fatura pelo menos R$360 mil por mês;",
      "Disponibilidade de horário.",
    ],
  },
  {
    title: "Requisitos para ser mentor acadêmico:",
    items: [
      "Possuir pelo menos mestrado;",
      "Atuar ou ter atuado como professor e/ou pesquisador há pelo menos 5 anos;",
      "Disponibilidade de horário.",
    ],
  },
];

const salt = new Date().getTime().toString(16).substring(0, 4);
export default function Mentor() {
  return (
    <>
      <TopBar />
      <Main>
        <h2 style={{ margin: "25px 0" }}>Quero ser Mentor</h2>

        <Section>
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
        </Section>

        <section style={{ marginTop: 15 }}>
          <Card style={{ padding: '1.4em 1.2em'}}>
            <h4>
              Se você atende a algum dos requisitos preencha o formulário abaixo
            </h4>
            <form>
              <Input label="Nome" />
              <Input label="Telefone" />
              <Input label="E-mail" />
              <Input label="LinkedIn" />
              <div>
                <label>Currículo:</label>
              </div>
            </form>
          </Card>
        </section>
      </Main>
    </>
  );
}
