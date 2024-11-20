"use client";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import { BoxGridContact, ContentMentor, Hero, ImageContainer, Section } from "./styles";
import Card from "@/components/Card";
import { container } from "@/lib/shared/styles";
import Footer from "@/components/Footer";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Section style={{ minHeight: "calc(100dvh - 150px)" }}>
          <Hero>
            <div style={{ minWidth: "30%", flex: "1 0 0", flexBasis: "50%" }}>
              <div>
                <h1 style={{ fontSize: "1.9em" }}>O que é mentoria?</h1>
                <p style={{ fontSize: "1.45em", color: "#535353" }}>
                  É um processo em que o mentor – alguém de larga experiência
                  profissional – vai compartilhar seus conhecimentos e
                  experiências com seu mentorado – alguém que precisa de
                  orientações profissionais. De modo que essa relação possa
                  contribuir para o desenvolvimento de carreira do mentorado.
                </p>
              </div>
              <div>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "1.1em",
                    color: "#fff",
                    borderRadius: "1.5em",
                    background: "#3782F3",
                    outline: "none",
                    border: "none",
                    padding: "0.6em 1.2em",
                  }}
                >
                  Conheça
                </button>

                <a
                  href="#contato"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    cursor: "pointer",
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    padding: "0.6em 1.2em",
                    fontSize: "1.1em",
                  }}
                >
                  Fale conosco
                </a>
              </div>
            </div>
            <ImageContainer>
              <Image
                fill
                priority
                sizes="(max-width: 640px) 100vw, 36vw"
                alt="Homem sentado em uma mesa com uma xícara de café conversando com outro homem"
                src="/img/mentor.jpg"
              />
            </ImageContainer>
          </Hero>
        </Section>
        <section
          style={{
            display: "flex",
            padding: "150px 0",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            background: "#FAFAFA",
          }}
        >
          <Card $css={container} style={{ padding: "25px 30px" }}>
            <h2 style={{ padding: "25px 10px" }}>Por que fazer mentoria?</h2>
            <div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Ampliação do networking
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Com ajuda da mentoria você pode encontrar novas
                      oportunidades de networking com profissionais que já
                      possuem experiência na área que você está buscando
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Maior segurança e auto-confiança
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the second item{"'"}s accordion body.
                      </strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It{"'"}s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Maior capacidade de enfrentar desafios na carreira
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the third item{"'"}s accordion body.
                      </strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It{"'"}s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Facilidade maior de colocação ou recolocação no mercado de
                      trabalho
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the third item{"'"}s accordion body.
                      </strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It{"'"}s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Crescimento pessoal e profissional
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>
                        This is the third item{"'"}s accordion body.
                      </strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It{"'"}s also worth noting that just about any
                      HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <Section id="mentores" style={{ padding: "15px 0px 100px 0px" }}>
          <h2 style={{ margin: "25px 15px" }}>Mentores</h2>
          <div
            style={{ display: "flex", alignItems: "center", margin: "0 15px" }}
          >
            <Card>
              <ContentMentor>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: 329,
                    display: "flex",
                    objectFit: "contain",
                  }}
                >
                  <Image
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 36vw"
                    alt="Homem de terno preto com uma gravata verde sentado com os braços sob a mesa olhando para a câmera"
                    src="/img/mentor_jose.png"
                  />
                </div>
                <div
                  style={{
                    padding: 20,
                    minWidth: "30%",
                    flex: "1 0 0",
                    flexBasis: "65%",
                  }}
                >
                  <h4>José Albuquerque</h4>

                  <p>
                    Possui graduação em Administração pela USP. Especialização
                    em Gestão de Pessoas pela PUC SP. Certificação em Master
                    Coach pelo IBC. Associado da ABRH-SP. Tem experiência de
                    mais de 15 anos na área de RH. Atualmente é diretor de RH do
                    Magazine Luiza. Autor do livro As Pessoas são o diferencial
                    competitivo das organizações.  Vencedor do 27º Prêmio Top of
                    Mind de RH. 
                  </p>
                </div>
              </ContentMentor>
            </Card>
          </div>
        </Section>
        <Section
          id="contato"
          style={{
            minHeight: "calc(100dvh - 150px)",
            padding: "15px 0px 100px 0px",
          }}
        >
          <h2 style={{ margin: "25px 15px" }}>Contato</h2>
          <form
            style={{ margin: "0 15px" }}
            action="/"
            onSubmit={(evt) => evt.preventDefault()}
          >
            <BoxGridContact>
              <Input label="Nome" container={{ id: "nome" }} />
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
                background: "#3F92E0",
                color: "#fff",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              Enviar
            </button>
          </form>
        </Section>
        <Footer />
      </main>
    </>
  );
}
