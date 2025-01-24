import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder, getOrderDTO } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";

import { Button, Col, Container, Row } from "react-bootstrap";
import { deliteOrderApi } from "../api";
import { BiArrowBack } from "react-icons/bi";
export const OrderPage = () => {
  const [data, setData] = useState([]);
  const { payed } = useParams();
  const navigate = useNavigate();

  const loadOrders = async () => {
    const result = await getOrder(payed);
    console.log(result.data);
    setData(result.data);
  };
  const deleteOrders = async (orderId) => {
    const result = await deliteOrderApi(orderId);
    if (result.ok) {
      loadOrders();
    } else {
      console.log(result.result);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <OrderList data={data} payed={payed} deleteOrder={deleteOrders} />
      </Container>
      <Row className=" d-flex justify-content-center fixed-bottom">
        <Col className=" d-flex justify-content-center">
          <Button
            className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
            size={"32px"}
            onClick={() => {
              navigate("/order");
            }}
          >
            <BiArrowBack size={"32px"} />
            Back
          </Button>
        </Col>
      </Row>
    </>
  );
};
