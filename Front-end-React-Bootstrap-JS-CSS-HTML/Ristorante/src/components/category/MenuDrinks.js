import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

import { BiDish } from "react-icons/bi";
import VinoRossoCategory from "../img/VinoRossoCategory.jpg";
import VinoBiancoCategory from "../img/VinoBiancoCategory.webp";
import BevandeCategory from "../img/BevandeCategory.avif";
import Bevande from "../img/Bevande.jpg";
import Dessert from "../img/dessert.jpg";
import Cart from "../Cart";
import { ModalInsert } from "../ModalInsert";
export const MenuDrinks = ({ edit, add, del, cartProducts, reset }) => {
  const { tableId } = useParams();
  const { elId } = useParams();

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
 const idOrder=localStorage.getItem("OrderID")
  const handleChangeType = (el) => {
    setType(el);
  };

  return (
    <Row>
      {tableId === "managment-drink" ? (
        <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Rosso");
                }}
              >
                <Card.Img variant="top" src={VinoRossoCategory} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Vino Rosso</h4>
                  <ModalInsert
                    showModal={show}
                    closeModal={handleClose}
                    type={type}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Bianco");
                }}
              >
                <Card.Img variant="top" src={VinoBiancoCategory} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Vino Bianco</h4>
                  <ModalInsert
                    showModal={show}
                    closeModal={handleClose}
                    type={type}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-5">
              <Button
                className=" btn-dark accordion-button"
                onClick={() => {
                  handleShow();
                  handleChangeType("Analcolico");
                }}
              >
                <Card.Img variant="top" src={BevandeCategory} />
              </Button>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-center">Secondo Piatto</h4>
                  <ModalInsert
                    showModal={show}
                    closeModal={handleClose}
                    type={type}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Row className=" d-flex justify-content-center fixed-bottom">
            <Col className=" d-flex justify-content-center">
              <Button
                className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
                size={"32px"}
                onClick={() => {
                  navigate("/table/Managmentyourprodacts");
                }}
              >
                <BiArrowBack size={"32px"} />
                Back
              </Button>
            </Col>
            <Col className=" d-flex justify-content-center">
              <Button
                className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
                size={"32px"}
                onClick={() => {
                  navigate("/admin");
                }}
              >
              Go to Admin 
              </Button>
            </Col>
          </Row>
        </Row>
      ) : (
        <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
          <Cart
            add={add}
            del={del}
            cartProducts={cartProducts}
            tableId={tableId}
            reset={reset}
            elId={elId}
          />
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/drinkscategory/rosso`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={VinoRossoCategory} />
                <Card.Body>
                  <Card.Title>Vino Rosso</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/drinkscategory/bianco`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={VinoBiancoCategory} />
                <Card.Body>
                  <Card.Title>Vino Bianco</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link
              to={`/table/${tableId}/drinkscategory/analcolico`}
              className=" text-decoration-none text-reset text-center"
            >
              <Card style={{ width: "18rem" }} className="my-5">
                <Card.Img variant="top" src={BevandeCategory} />
                <Card.Body>
                  <Card.Title>Bevande</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          {idOrder !== null ? (
            <Row className=" d-flex justify-content-center fixed-bottom">
              <Col className=" d-flex justify-content-center">
                <Button
                  className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
                  size={"32px"}
                  onClick={() => {
                    navigate(`/table/${tableId}/${idOrder}`);
                  }}
                >
                  <BiArrowBack size={"32px"} />
                  Back
                </Button>
              </Col>
            </Row>
          ) : (
            <Row className=" d-flex justify-content-center fixed-bottom">
              <Col className=" d-flex justify-content-center">
                <Button
                  className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
                  size={"32px"}
                  onClick={() => {
                    navigate(`/table/${tableId}`);
                  }}
                >
                  <BiArrowBack size={"32px"} />
                  Back
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      )}
    </Row>
  );
};
