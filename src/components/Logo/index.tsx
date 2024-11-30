import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 949px) {
    & span {
      display: none;
    }
  }
`;

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box>
        <div
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image fill alt="Logomarca" src="/logo.png" />
        </div>
        <span
          style={{
            fontSize: "1.04em",
            width: 50,
            fontWeight: 400,
            color: "#d1a85c",
            lineHeight: "1.2",
          }}
        >
          MEU MENTOR
        </span>
      </Box>
    </Link>
  );
}
