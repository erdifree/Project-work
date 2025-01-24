import { postFoodApi, putOrderApi, deliteFoodApi,postDrinkApi } from "../api";
import { useState, useEffect } from "react";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const ModalInsert = ({ showModal, closeModal, type }) => {
  const defaultInputState = {
    img: "",
    name: "",
    description: "",
    price: "",
    type: "",
  };
  const [inputState, setInputState] = useState(defaultInputState);
  const [show, setShow] = useState(false);
  const [data1, setData1] = useState([]);
  const [inputErrors, setInputErrors] = useState({});

  // Validation  form
  const validate = (inputObject) => {
    const errorObj = {};
    if (inputObject.name === "") {
      errorObj.name = "Food name is mandatory";
    }
    if (inputObject.img === "") {
      errorObj.img = "Food image is mandatory";
    }
    if (inputObject.price <= 5.0) {
      errorObj.price = " Price i higter then  5.00 euro";
    }
    if (inputObject.description === "") {
      errorObj.description = "Food description is mandatory";
    }
    if (inputObject.type === "") {
      errorObj.type = "Food type is mandatory";
    }
    return errorObj;
  };

  // acquisizione valori form
  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorObject = validate(inputState);
    if (Object.keys(errorObject).length === 0) {
      console.log("sono input per inserd del prodotto", inputState);
       if (
           inputState.type === "Rosso" ||
           inputState.type ==="Bianco" ||
           inputState.type === "Analcolico"
         ){
          const response = await postDrinkApi(inputState);
          console.log("rrrrrrrrrrrrrrrrrrrrrrr",response);
            if (response.ok) {
              setInputState(defaultInputState);
            }
         }else{
         const response = await postFoodApi(inputState);
           if (response.ok) {
             setInputState(defaultInputState);
           }
         }
    } else {
      setInputErrors(errorObject);
    }
  };

  const handleDeliteFood = async (data) => {
    const result = await deliteFoodApi(data.id);
    if (result.ok) {
      const updateFood = data.filter((el) => {
        return el.id !== data.id;
      });
      setData1(updateFood);
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <div className="container mt-3 fw-bold" id="admin">
        <Modal
          show={showModal}
          onHide={() => {
            closeModal();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name Dish</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name of Product"
                  value={inputState.name}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.name ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Pictur of Dish</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http//: ..."
                  value={inputState.img}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.img ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.img}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={inputState.price}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.price ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.price}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={inputState.description}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.description ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="type">
            
                <Form.Control hidden={true}
                  type="text"
                  value={(inputState.type = type)}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.description ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.type}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Product 

              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
