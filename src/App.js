import { Container } from "@material-ui/core";
import FormHeader from "./components/FormHeader";
import Form from "./components/Form";

function App(props) {
  const data = props.data;

  return (
    <Container maxWidth="md" pt={3}>
      <FormHeader formName={data.formName} formDesc={data.formDesc} mt={2} />
      <hr />
      <Form data={data.data} />
    </Container>
  );
}

export default App;
