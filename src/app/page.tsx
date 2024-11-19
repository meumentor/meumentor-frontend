"use client";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import { Hero, ImageContainer, Section } from "./styles";
import Card from "@/components/Card";
import { container } from "@/lib/shared/styles";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Section>
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

                <button
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    padding: "0.6em 1.2em",
                    fontSize: "1.1em",
                  }}
                >
                  Fale conosco
                </button>
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
      </main>
    </>
  );
}
