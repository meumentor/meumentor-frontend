"use client";
import Input from "@/components/Input";
import Image from "next/image";
import { CardLogin, RowLogin, SectionLogin } from "./styles";
import Logo from "@/components/Logo";
// import styled from "@emotion/styled";
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

const formatDefault = (v: string) => v;
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
    <main style={{ background: "#f2f2f3" }}>
      <SectionLogin>
        <CardLogin>
          <div className="side-image">
            <Image
              alt="Mentor e Mentorado"
              src="/img/mentor_e_mentorado.jpg"
              fill
            />
          </div>
          <div className="side-form" style={{ position: "relative" }}>
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
                <Input
                  autoFocus
                  type="email"
                  label="Email"
                  layout="placeholder"
                  id="email"
                  value={form?.user ?? ""}
                  onChange={(evt) => handleForm(evt, "user")}
                  required
                />
                <Input
                  label="Senha"
                  layout="placeholder"
                  type="password"
                  id="password"
                  value={form?.password ?? ""}
                  onChange={(evt) => handleForm(evt, "password")}
                  required
                />
                <RowLogin>
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
                      color: "#4d4d4d",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    Esqueceu a senha?
                  </button>
                </RowLogin>
                <Link
                  href="/perfil"
                  style={{
                    color: "#fff",
                    background: "var(--black200)",
                    outline: "none",
                    border: "none",
                    padding: "0.4em 0",
                    width: "100%",
                    borderRadius: "0.6em",

                    // link
                    textDecoration: "none",
                    textAlign: "center",
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
              <div
                style={{
                  position: "absolute",
                  bottom: 15,
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#4a4a4a", fontSize: "1.1em" }}>
                  Ainda não possui uma conta?{" "}
                </span>
                <Link
                  href="cadastro"
                  style={{
                    textDecoration: "none",
                    color: "var(--black200)",
                    fontSize: "1.1em",
                    fontWeight: 500,
                  }}
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
          </div>
        </CardLogin>
      </SectionLogin>
    </main>
  );
}
