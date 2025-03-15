"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

const Main = styled.main`
  ${container}
`;

export default function Mentor() {
  return (
    <>
      <TopBar />
      <Main>
        <section style={{ margin: "15px 0" }}>
          <Card style={{ padding: "3em 2.5em" }}>
            <h2 style={{ textAlign: "center" }}>Cadastro de Mentor</h2>
            <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
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
            </div>
            <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
              <Input
                label="E-mail"
                layout="placeholder"
                container={{ style: { width: "100%" } }}
              />
              <Input
                label="Telefone"
                layout="placeholder"
                options={{
                  mask: '(__) _.____-____',
                  replacement: { _: /\d/ },
                }}
                container={{ style: { width: "100%" } }}
              />
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 20}}>
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
            </div>
          </Card>
        </section>
      </Main>
      <Footer />
    </>
  );
}
