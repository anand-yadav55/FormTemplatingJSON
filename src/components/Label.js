import { Typography } from "@material-ui/core";

export default function Label(props) {
  return (
    <label htmlFor={props.name}>
      <Typography variant="h6">{props.label}</Typography>
    </label>
  );
}
