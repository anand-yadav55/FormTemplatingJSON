import Label from "./Label";
import Message from "./Message";

export default function TextArea(props) {
  const fieldData = props.fieldData;
  const rules = props.rules && props.rules[0];
  const message = rules && rules.message;
  return (
    <>
      <Label name={fieldData.name} label={fieldData.label} />
      {message ? <Message message={message} /> : false}
      <textarea
        style={{
          width: "80%",
          outline: "0",
          border: "0",
          borderBottom: "1px solid gray"
        }}
        type={fieldData.type}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        required={rules && rules.required ? true : false}
      />
    </>
  );
}
