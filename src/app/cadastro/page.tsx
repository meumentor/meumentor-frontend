"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { container } from "@/lib/shared/styles";
import styled from "@emotion/styled";
import Link from "next/link";
import { FaUserGraduate, FaUserTie } from "react-icons/fa6";

const Main = styled.main`
  ${container}
  height: calc(100dvh - 235px);

  @media screen and (max-width: 949px) {
    height: calc(100dvh - 223px);
  }
`;

// const Container = styled.div`
//   display: flex;
//   gap: 15px;
// `;

export default function Cadastro() {
  return (
    <>
      <TopBar />
      <Main>
        <h2 style={{ textAlign: "center" }}>Cadastro</h2>
        {/* <Container>
          <Link href="/cadastro/mentor" style={{ textDecoration: "none" }}>
            <Card style={{ color: '#212121'}}>
              <FaUserTie size="2.5em" />
              <span style={{ fontSize: "1.8em" }}>Mentor</span>
            </Card>
          </Link>
          <Link href="/cadastro/mentorado" style={{ textDecoration: "none" }}>
            <Card style={{ color: '#212121'}}>
              <FaUserGraduate size="2.5em" />
              <span style={{ fontSize: "1.8em" }}>Mentorado</span>
            </Card>
          </Link>
        </Container> */}
        <div
          style={{
            display: "flex",
            gap: 15,
            alignItems: "center",
            justifyContent: "center",
            margin: "15px 0",
            flexWrap: "wrap",
            height: "calc(100% - 150px)",
          }}
        >
          <Link href="/cadastro/mentor" style={{ textDecoration: "none" }}>
            <Card
              style={{
                padding: "1.4em 1.2em",
                display: "flex",
                flexDirection: "column",
                width: "20em",
                justifyContent: "center",
                alignItems: "center",
                color: "#494949",
              }}
            >
              <FaUserTie size="8em" />
              <span style={{ fontSize: "1.8em" }}>Mentor</span>
            </Card>
          </Link>
          <Link href="/cadastro/mentorado" style={{ textDecoration: "none" }}>
            <Card
              style={{
                padding: "1.4em 1.2em",
                display: "flex",
                flexDirection: "column",
                width: "20em",
                justifyContent: "center",
                alignItems: "center",
                color: "#575757",
              }}
            >
              <FaUserGraduate size="8em" />
              <span style={{ fontSize: "1.8em" }}>Mentorado</span>
            </Card>
          </Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}
