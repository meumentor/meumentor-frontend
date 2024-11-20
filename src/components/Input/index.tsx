interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  container?: React.ComponentPropsWithoutRef<"div">;
}

export default function Input(props: InputProps) {
  const { label, container, ...rest } = props;
  const id = props?.id ?? `inp${label ?? ''}${new Date().getTime().toString(16).substring(0, 4)}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} {...container}>
      <label style={{ fontSize: '1.3em'}} htmlFor={id}>{label}</label>
      <input id={id} style={{ fontSize: '1.3em', border: 'solid 1px #9c9c9c', borderRadius: '0.2em' }} {...rest} />
    </div>
  );
}
