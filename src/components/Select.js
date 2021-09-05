import Label from "./Label";
import Message from "./Message";

export default function Text(props) {
  const fieldData = props.fieldData;
  const options = props.options;
  const rules = props.rules && props.rules[0];
  const message = rules && rules.message;
  return (
    <>
      <Label name={fieldData.name} label={fieldData.label} />
      {message ? <Message message={message} /> : false}
      <select
        style={{
          width: "80%",
          outline: "0",
          border: "0",
          borderBottom: "1px solid gray",
          margin: "10px"
        }}
        multiple={fieldData.type === "multiselect" ? true : false}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        required={rules && rules.required ? true : false}
      >
        {options.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>
    </>
  );
}
