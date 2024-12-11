import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

const Box = styled.div<{ $responsive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${(attr) =>
    attr?.$responsive
      ? `@media screen and (max-width: 949px) {
    & span {
      display: none;
    }
  }`
      : ""}
`;

interface LogoProps {
  components?: {
    image?: ImageProps;
    containerImage?: React.ComponentPropsWithoutRef<"div">;
  };
  responsive?: boolean;
  label?: boolean;
  size?: number;
}

export default function Logo(props: LogoProps) {
  const { label = true, size, components, responsive = true } = props;
  const { containerImage = {}, image = {} } = components ?? {};
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Box $responsive={responsive}>
        <div
          {...containerImage}
          style={{
            borderRadius: "50%",
            width: size ?? 40,
            height: size ?? 40,
            position: "relative",
            overflow: "hidden",
            ...(containerImage.style ?? {}),
          }}
        >
          <Image fill alt="Logomarca" src="/logo.png" {...image} />
        </div>
        {label && (
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
        )}
      </Box>
    </Link>
  );
}
