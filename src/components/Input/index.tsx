import styled from "@emotion/styled";
import { MaskOptions, useMask } from "@react-input/mask";
import { useMemo } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?:
    | string
    | (React.ComponentPropsWithoutRef<"label"> & { value?: string });
  container?: React.ComponentPropsWithoutRef<"div">;
  layout?: "default" | "placeholder";
  input?: React.ComponentPropsWithoutRef<"input">;
  options?: MaskOptions;
}

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
    width: 100%;
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

export default function Input(props: InputProps) {
  const { label, container, layout, input, options, ...rest } = props;
  const ref = useMask(options);
  const id =
    props?.id ??
    `inp${label ?? ""}${new Date().getTime().toString(16).substring(0, 4)}`;

  const labelValue = useMemo(
    () => (typeof label === "string" ? label : label?.value),
    [label]
  );
  const labelProps = useMemo(
    () => (typeof label === "string" ? {} : label),
    [label]
  );
  if (layout === "placeholder")
    return (
      <InputContainer {...container}>
        <input ref={options ? ref : undefined} placeholder=" " {...Object.assign({}, input, rest)} />
        <label htmlFor={id} {...labelProps}>
          {labelValue}
        </label>
      </InputContainer>
    );
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      {...container}
    >
      <label style={{ fontSize: "1.25em" }} htmlFor={id} {...labelProps}>
        {labelValue}
      </label>
      <input
        ref={options ? ref : undefined}
        id={id}
        style={{
          fontSize: "1.3em",
          border: "solid 1px #9c9c9c",
          borderRadius: "0.2em",
        }}
        {...Object.assign({}, input, rest)}
      />
    </div>
  );
}
