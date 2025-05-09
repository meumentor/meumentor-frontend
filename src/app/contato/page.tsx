"use client";
import Input from "@/components/Input";
import { BoxGridContact, Section } from "../styles";
import TopBar from "@/components/TopBar";
import Card from "@/components/Card";

export default function Contato() {
  return (
    <>
      <TopBar />
      <main>
        <Section
          id="contato"
          style={{
            minHeight: "calc(100dvh - 150px)",
            padding: "15px 0px 100px 0px",
          }}
        >
          <Card style={{ padding: "2em 1.5em", marginTop: 30, margin: '15px 10px' }}>
            <h2 style={{ margin: "25px 15px", textAlign: "center" }}>
              Contato
            </h2>
            <form
              style={{ margin: "0 15px" }}
              action="/"
              onSubmit={(evt) => evt.preventDefault()}
            >
              <BoxGridContact>
                <Input autoFocus label="Nome" container={{ id: "nome" }} />
                <Input label="Telefone" container={{ id: "telefone" }} />
                <Input label="E-mail" container={{ id: "email" }} />
                <div id="message">
                  <label
                    htmlFor="inpMessage"
                    style={{ marginTop: 10, fontSize: "1.3em" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="inpMessage"
                    style={{
                      resize: "none",
                      width: "100%",
                      border: "solid 1px #9c9c9c",
                    }}
                    rows={10}
                    cols={120}
                  ></textarea>
                </div>
              </BoxGridContact>
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
        </Section>
      </main>
    </>
  );
}
