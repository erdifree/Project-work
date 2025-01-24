import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function PinModal(props) {
  const [pin, setPin] = useState("");

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(pin);
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Enter PIN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPin">
            <Form.Label>PIN</Form.Label>
            <Form.Control
              type="password"
              value={pin}
              onChange={handlePinChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PinModal;
