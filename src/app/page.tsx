"use client";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import {
  ContainerRow,
  ContentMentor,
  Hero,
  ImageContainer,
  Section,
} from "./styles";
import Card from "@/components/Card";
import { container } from "@/lib/shared/styles";
import Footer from "@/components/Footer";
import Link from "next/link";

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
                    fontSize: "1.1em",
                    color: "#fff",
                    borderRadius: "1.5em",
                    background: "var(--black200)",
                    outline: "none",
                    border: "none",
                    padding: "0.6em 1.2em",
                  }}
                >
                  Conheça
                </button>

                <Link
                  href="contato"
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
                </Link>
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
          <div className="d-flex justify-content-center">
            <Link
              href="/cadastro/mentor"
              style={{
                marginTop: 10,
                fontSize: "1.1em",
                color: "#fff",
                borderRadius: "1.5em",
                background: "var(--black200)",
                textDecoration: 'none',
                outline: "none",
                border: "none",
                padding: "0.6em 1.2em",
              }}
            >
              Venha ser Mentor
            </Link>
          </div>
        </Section>

        <Section id="depoimentos" style={{ padding: "15px 0px 100px 0px" }}>
          <h2 style={{ margin: "25px 15px" }}>Depoimentos</h2>
          <ContainerRow>
            <Card className="p-4">
              <p>
                {`"`}O site meumentor.net foi um divisor de águas na minha
                carreira profissional. Ao ter a mentoria com o mentor José
                Albuquerque, ele me fez enxergar meu potencial, compartilhou
                conhecimentos e vivências e me concedeu dicas valiosas. Sou
                grata ao site e ao meu mentor, porque contribuíram bastante para
                o meu sucesso profissional.{`"`}
              </p>
              <div className="d-flex gap-2">
                <div
                  style={{
                    position: "relative",
                    width: 58,
                    height: "100%",
                    minHeight: 58,
                    display: "flex",
                    objectFit: "contain",
                    borderRadius: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 36vw"
                    alt="Ícone de perfil"
                    src="/img/perfil_mulher.png"
                  />
                </div>
                <div>
                  <p
                    className="m-0"
                    style={{ fontSize: "1.25em", fontWeight: 500 }}
                  >
                    Ingrid Vieira
                  </p>
                  <span style={{ color: "#4a4a4a" }}>Mentorada</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <p>
                {`"`}Recomendo a todos que almejam, seja uma recolocação no
                mercado de trabalho ou upgrade na carreira, o site
                meumentor.net. São oferecidas mentorias de qualidade, sem falsas
                promessas por parte do mentor. Essa experiência me abriu a
                perspectivas que jamais imaginei e superou minhas expectativas.
                {`"`}
              </p>
              <div className="d-flex gap-2">
                <div
                  style={{
                    position: "relative",
                    width: 58,
                    height: "100%",
                    minHeight: 58,
                    display: "flex",
                    objectFit: "contain",
                    borderRadius: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 36vw"
                    alt="Ícone de perfil"
                    src="/img/perfil_homem.png"
                  />
                </div>
                <div>
                  <p
                    className="m-0"
                    style={{ fontSize: "1.25em", fontWeight: 500 }}
                  >
                    Anderson dos Santos
                  </p>
                  <span style={{ color: "#4a4a4a" }}>Mentorado</span>
                </div>
              </div>
            </Card>
          </ContainerRow>
        </Section>
        <Footer />
      </main>
    </>
  );
}
