import { Card, CardContent, Typography } from "@material-ui/core";

export default function FormHeader(props) {
  const [formName, formDesc] = [props.formName, props.formDesc];
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h3" component="h2">
          {formName}
        </Typography>
        <Typography variant="overline" component="p">
          {formDesc}
        </Typography>
      </CardContent>
    </Card>
  );
}
