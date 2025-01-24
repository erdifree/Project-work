import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder, getOrderDTO, updatePaymentDTOApi } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";
import { OrderListDTO } from "../components/OrderCategory/OrderListDTO";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";

export const ManagmentPaymentPage = () => {

  const [order, setOrder] = useState({ payed: true });
  const [dataDto, setDataDto] = useState([]);
  
const{type}= useParams;
const navigate=useNavigate()


  const loadOrdersDTO =  async () => {
    const result = await getOrderDTO("false");
    if (result.ok) {
      setDataDto(result.data)
    } else {
   
      console.log(result.data);
    }
  };
  const updatePayDto = async (id) => {
    const result = await updatePaymentDTOApi(order, id);
    loadOrdersDTO();
   console.log(" Ordini rimasti aperti",result);
  };

  useEffect(() => {
    loadOrdersDTO();
  }, []);

  return (
    <>
      <Sidebar />
      <OrderListDTO
        updatePayDto={updatePayDto}
        dataDto={dataDto}
        loadOrdersDTO={loadOrdersDTO}
      />
      <Row className=" d-flex justify-content-center fixed-bottom">
        <Col className=" d-flex justify-content-center">
          <Button
            className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
            size={"32px"}
            onClick={() => {
              navigate("/admin");
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
