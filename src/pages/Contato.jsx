import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <div style = {{
      alignContent: "center",
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    }}
    >
    <Form style = {{
      margin: "60px"
    }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Insira seu Email:</Form.Label>
        <Form.Control type="email" placeholder="Insira seu email" />
        <Form.Text className="text-muted">
          Este email não será compartilhado com ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contato:</Form.Label>
        <Form.Control type="password" placeholder="Digite aqui a intenção do seu contato" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Concordo em enviar o conteúdo digitado" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;