import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
// import RootStyleRegistry from "./emotion";

// dark-theme
// const theme = {
//   body: '#292929',
//   cardLevel1: '#3b3b3b',
//   text1: '#d9d9d9',
//   blue100: 'rgb(159 177 255)',
//   bgInput: '#3f3f3f',
//   borderColorInput: 'rgb(65 65 65)',
// }


// dart-theme homepage
// const themeHome = {
//   body: '#292929',
//   labelAccordion: '#fcfcfc',
//   borderAccordion: '#363636',
//   backgroundCardAccordion: '#3a3a3a',
//   backgroundDiverAccordion: '#3a3a3a', 
// }

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meu Mentor",
  description: "App de Mentoria para crescimento profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/icon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg" />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Meu Mentor" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
