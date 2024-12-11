"use client";
import Input from "@/components/Input";
import Image from "next/image";
import { CardLogin, MainLogin } from "./styles";
import Logo from "@/components/Logo";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

const providers = [
  {
    name: "Google",
    img: "/img/google.png",
  },
  {
    name: "LinkedIn",
    img: "/img/linkedin.png",
  },
];

const InputContainer = styled.div`
  position: relative;
  font-size: 1.25em;

  & input {
    &:focus {
      outline: 1px solid var(--input-outline);
    }
    &:not(:placeholder-shown) {
      z-index: 0;
    }
    &:not(:placeholder-shown) ~ label,
    .input input:focus ~ label {
      top: -29%;
      font-size: 0.74em;
      cursor: default;
      color: var(--input-label-color);
      background: var(--input-label-background);
      z-index: 1;
    }

    font-size: inherit;
    padding: 0.35em 0.5em;
    z-index: 1;
    position: relative;
    background: transparent;
    border: 1px solid rgb(163, 163, 163);
    border-radius: 0.3em;
    color: var(--input-color);
  }

  & label {
    position: absolute;
    color: var(--input-label-disabled);
    top: 7.3px;
    left: 12.4px;
    font-size: 0.95em;
    transition: all 0.2s ease-in;
    z-index: 0;
    cursor: text;
  }
`;

const formatDefault = (v: string) => v
const formatPassword = (value: string) =>
  value?.replace(/([^a-zA-Z0-9@&*çÇ(),\.-])/g, "");

export default function Login() {
  const [form, setForm] = useState<{ user?: string; password?: string }>({});
  const [info, setInfo] = useState("");

  const handleForm = (
    evt: React.ChangeEvent<HTMLInputElement>,
    field: "user" | "password"
  ) => {
    if (info) setInfo("");
    const format = field === "password" ? formatPassword : formatDefault;
    const value = format(evt.target.value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <MainLogin>
      <CardLogin>
        <div className="side-image">
          <Image
            alt="Mentor e Mentorado"
            src="/img/mentor_e_mentorado.jpg"
            fill
          />
        </div>
        <div className="side-form">
          <div style={{ maxWidth: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 15,
              }}
            >
              <div>
                <Logo
                  responsive={false}
                  size={75}
                  components={{
                    containerImage: {
                      style: {
                        borderRadius: "none",
                        width: 75,
                      },
                    },
                    image: {
                      src: "/icon/web-app-manifest-192x192.png",
                      fill: true,
                      alt: "Logo",
                    },
                  }}
                />
              </div>
              <InputContainer>
                <input placeholder=" " autoFocus />
                <label>Email</label>
              </InputContainer>
              <InputContainer>
                <input
                  name="senha"
                  type="password"
                  id="password"
                  placeholder=" "
                  value={form?.password ?? ""}
                  onChange={(evt) => handleForm(evt, "password")}
                  required
                />
                <label htmlFor="password">Senha</label>
              </InputContainer>
              {/* <Input label="Email" /> */}
              {/* <Input label="Senha" /> */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input
                  label="Lembrar-me"
                  type="checkbox"
                  container={{
                    style: {
                      display: "flex",
                      gap: 8,
                      flexDirection: "row-reverse",
                    },
                  }}
                />

                <button
                  style={{
                    background: "transparent",
                    color: "#0d29a3",
                    border: "none",
                    outline: "none",
                  }}
                >
                  Esqueceu a senha?
                </button>
              </div>

              <Link
                href="/perfil"
                style={{
                  color: "#fff",
                  background: "var(--blue100)",
                  outline: "none",
                  border: "none",
                  padding: "0.4em 0",
                  width: "100%",
                  borderRadius: "0.6em",

                  // link
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Login
              </Link>
              {providers.map((item, i) => (
                <button
                  key={`button-${i}-${new Date()
                    .getTime()
                    .toString(16)
                    .substring(0, 4)}`}
                  style={{
                    border: "solid 1px rgb(217, 217, 217)",
                    borderRadius: "0.6em",
                    padding: "0.25em 0.8em",
                    display: "flex",
                    gap: 8,
                    background: "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Image alt="" width={28} height={28} src={item.img} />
                  Login com o {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardLogin>
    </MainLogin>
  );
}
