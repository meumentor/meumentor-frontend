"use client";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";

const Main = styled.main`${container}`

export default function PrivacyPolicy() {
  return (
    <>
      <TopBar />
      <Main>
        <h2 style={{ margin: '25px 0'}}>Política de Privacidade</h2>
        <p>O MEU MENTOR assegura o compromisso da proteção e privacidade dos seus dados.</p>
        <p>Ao utilizar os nossos serviços, você está de acordo e ciente acerca da presente Política de Privacidade. Lembrando que você pode acessá-la quando desejar, mas é essencial que você a leia antes de realizar o seu cadastro na plataforma.</p>
        <p>Nossa política de privacidade poderá passar por alterações no decorrer do tempo. Informaremos por e-mail um resumo das mudanças que foram feitas e você poderá conferir na integra todas as alterações feitas no nosso site.</p>
        <p>Caso você tenha alguma dúvida em relação a esta Política de Privacidade, entre em contato conosco através do e-mail <a href="mailto:contato@meumentor.com.br">contato@meumentor.com.br</a>.</p>
        <p>Importante dizer que essa Política de Privacidade e os serviços prestados pelo MEU MENTOR estão de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709). Assim como esta Lei brasileira, o MEU MENTOR também quer garantir os direitos das pessoas em relação a seus dados pessoais.</p>
        <p>Para fins de compreensão quando nos referirmos NÓS, A GENTE, A PLATAFORMA estamos tratando da plataforma MEU MENTOR e para os termos VOCÊ, O UTILIZADOR e O USUÁRIO estaremos tratando dos usuários que utilizem a nossa plataforma.</p>
        <h4>1. Coleta de Dados</h4>
        <h4>2. Segurança</h4>
      </Main>
    </>
  );
}
