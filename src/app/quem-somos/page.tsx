"use client";
import TopBar from "@/components/TopBar";
import { Section } from "../styles";
import { PiDiamondFill } from "react-icons/pi";

export default function About() {
  return (
    <>
      <TopBar />
      <main>
        <Section style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <h2 style={{ margin: "25px 0", textAlign: "center" }}>
              Quem Somos
            </h2>
            <p>
              O site <a href='https://meumentor.net'>meumentor.net</a> surge com o intuito de conectar grandes
              profissionais de mercado com as pessoas, através da mentoria.
              Somos uma HR Tech que tem o propósito de contribuir para a
              realização pessoal e profissional das pessoas. Queremos fazer
              deste mundo um lugar melhor para viver. Vem com a gente!
            </p>
          </div>
          <div>
            <h3>
              <PiDiamondFill size={14} /> MISSÃO
            </h3>
            <p>
              Contribuir para o crescimento e desenvolvimento pessoal e
              profissional dos indivíduos gerando satisfação e bem-estar
            </p>
          </div>
          <div>
            <h3>
              <PiDiamondFill size={14} /> VISÃO
            </h3>
            <p>
              Ser uma plataforma on-line de mentoria que seja referência no
              mercado
            </p>
          </div>
          <div>
            <h3>
              <PiDiamondFill size={14} /> VALORES
            </h3>
            <ul>
              <li>Ética</li>
              <li>Profissionalismo</li>
              <li>Excelência</li>
              <li>Transformação social</li>
            </ul>
          </div>
        </Section>
      </main>
    </>
  );
}
