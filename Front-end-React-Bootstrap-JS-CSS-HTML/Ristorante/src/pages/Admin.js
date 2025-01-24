import { useState, useEffect } from "react";

import { OrderList } from "../components/OrderCategory/OrderList";
import "../components/css/style.css";
import { Sidebar } from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import Order from "../components/img/ordermanagment.jpg";
import LogoCassa from "../components/img/LogoCassa.jpg";
import LogoVino from "../components/img/LogoVino.jpg";
import { postFoodApi } from "../api";
import { updatePaymentApi } from "../api";
import { ModalInsert } from "../components/ModalInsert";
export const Admin = () => {
  const [data, setData] = useState([]);

  const postFood = async (food) => {
    const result = await postFoodApi(food);
    console.log(result.data);
    setData(result.data);
  };

  return (
    <>
      <Sidebar />
      <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap mt-5 pt-5 ">
        <Col xs={12} md={6} lg={4}>
          <Link
            to={`/order`}
            className=" text-decoration-none text-reset text-center"
          >
            <Card style={{ width: "18rem" }} className="my-5">
              <Card.Img variant="top" src={Order} style={{ height: "14rem" }} />
              <Card.Body>
                <Card.Title>Order Managment</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Link
            to={`/managmentPaymentPage`}
            className=" text-decoration-none text-reset text-center"
          >
            <Card style={{ width: "18rem" }} className="my-5">
              <Card.Img
                variant="top"
                src={LogoCassa}
                style={{ height: "14rem" }}
              />
              <Card.Body>
                <Card.Title>Cassa</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Link
            to={`/table/Managmentyourprodacts`}
            className=" text-decoration-none text-reset text-center"
          >
            <Card style={{ width: "18rem" }} className="my-5">
              <Card.Img
                variant="top"
                src={LogoVino}
                style={{ height: "14rem" }}
              />
              <Card.Body>
                <Card.Title>Managment Product</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};
