/* eslint-disable react-hooks/exhaustive-deps */
import useWindowSize from "@/lib/hooks/useWindowSize";
import { SetState } from "@/lib/types";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface ISideMenu {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
  logged?: boolean;
}

export const Container = styled.div<{ $active?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: transform ease-in 0.25s;

  @media screen and (max-width: 950px) {
    z-index: 2;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    transform: ${(attr) => `translateX(${attr?.$active ? 0 : -100}%)`};
    /* visibility: ${(attr) => (attr?.$active ? "visible" : "hidden")}; */
    max-width: 90%;
    height: 100dvh;
    background-color: #fff;
    justify-content: space-between;

    & .positional {
      display: none;
    }

    & ul {
      margin-top: 15px;
    }

    & ul {
      align-items: start;
      flex-direction: column;
      margin-left: 20px;
    }
  }
`;

const Backdrop = styled.div`
  background: rgb(0, 0, 0, 0.35);
  backdrop-filter: blur(2.5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ContainerClose = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 15px;

  @media screen and (min-width: 950px) {
    & {
      display: none;
    }
  }
`;

export default function SideMenu(props: ISideMenu) {
  const { isOpen, setIsOpen, logged } = props;
  const { width } = useWindowSize();

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if ((width ?? 0) >= 950) close();
  }, [width]);

  return (
    <>
      {isOpen && <Backdrop onClick={close} />}
      <Container $active={isOpen}>
        <div className="positional" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ContainerClose>
            <button
              onClick={close}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "0.4em",
              }}
            >
              <FaX />
            </button>
          </ContainerClose>
          <ul className="list-menu">
            <li>
              <Link
                onClick={close}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/"
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                onClick={close}
                style={{ textDecoration: "none", color: "inherit" }}
                href="quem-somos"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                onClick={close}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/#mentores"
              >
                Mentores
              </Link>
            </li>
            <li>
              <Link
                onClick={close}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        {!logged ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Link
              onClick={close}
              href='/cadastro'
              style={{
                textDecoration:'none',
                cursor: "pointer",
                fontSize: "1em",
                color: "#585858",
                padding: "0.8em 0.6em",
                background: "none",
                border: "none",
                outline: "none",
              }}
            >
              Cadastre-se
            </Link>
            <Link
              onClick={close}
              href="/login"
              style={{
                cursor: "pointer",
                fontSize: "1em",
                color: "#fff",
                background: "#0854E0",
                padding: "0.45em 1.2em",
                outline: "none",
                border: "none",
                borderRadius: "1.5em",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        ) : (
          <div style={{ height: 50 }} />
        )}
      </Container>
    </>
  );
}
