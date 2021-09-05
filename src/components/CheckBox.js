import Label from "./Label";
import Message from "./Message";

export default function Text(props) {
  const fieldData = props.fieldData;
  const rules = props.rules && props.rules[0];
  const message = rules && rules.message;
  return (
    <>
      {message ? <Message message={message} /> : false}
      <Label name={fieldData.name} label={fieldData.label} />
      <input
        type={fieldData.type}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        required={rules && rules.required ? true : false}
      />
    </>
  );
}
