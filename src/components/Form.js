import CheckBox from "./CheckBox.js";
import Select from "./Select.js";
import Text from "./Text.js";
import TextArea from "./TextArea.js";
import { Card, Grid, Box, CardContent, Button } from "@material-ui/core";
export default function Form(props) {
  const data = props.data;

  function RenderSwitch(props) {
    const [name, placeholder, label, rules, type] = [
      props.item.fieldname,
      props.item.fieldplaceholder,
      props.item.fieldlabel,
      props.item.fieldrules,
      props.item.fieldtype
    ];
    const fieldData = {
      name: name,
      placeholder: placeholder,
      label: label,
      type: type
    };
    switch (type) {
      case "text":
        return <Text rules={rules} fieldData={fieldData} />;

      case "textarea":
        return <TextArea rules={rules} fieldData={fieldData} />;

      case "multiselect":
        return (
          <Select
            rules={rules}
            options={props.item.options}
            fieldData={fieldData}
          />
        );
      case "select":
        return (
          <Select
            rules={rules}
            options={props.item.options}
            fieldData={fieldData}
          />
        );

      case "checkbox":
        return <CheckBox rules={rules} fieldData={fieldData} />;

      default:
        return false;
    }
  }
  return (
    <Card variant="outlined" p={1}>
      <Grid container spacing={2}>
        {data.map((item, idx) => {
          return (
            <Grid key={idx} item xs={12}>
              <Box m={1}>
                <Card variant="outlined">
                  <CardContent>
                    <RenderSwitch item={item} />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box p={2}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "0 auto", display: "flex" }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  );
}
