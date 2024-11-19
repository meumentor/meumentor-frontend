import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 949px) {
    & span {
      display: none;
    } 
  }
`

export default function Logo() {
  return (
    <Box>
      <div
        style={{
          borderRadius: "50%",
          width: 40,
          height: 40,
          background: "#8d8d8d",
        }}
      ></div>
      <span style={{ width: 50 }}>Meu Mentor</span>
    </Box>
  );
}
