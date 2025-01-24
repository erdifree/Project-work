import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { ModalOrder } from "../NavComponent/ModalOrder";
import { ModalOrderDTO } from "../NavComponent/ModalOrderDTO";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import LogoOrdineCassa from "../img/LogoOrdineCassa.jpg";
import { useState } from "react";
export const Order = ({
  getOrderList,
  deleteOrder,
  dataDto,
  updatePayDto,
  loadOrdersDTO,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  console.log("ORDER SINGOLO", getOrderList.id);
  const flag = false;
   const ORDERID = localStorage.setItem("OrderID", getOrderList.id);
   console.log("Log orderrrrrrrrr local", ORDERID);
  return (
    <>
      
        <td>{getOrderList.id}</td>
        <td>{getOrderList.localDate}</td>
        <td>
          <Button variant="light">
            <BsFillTrashFill
              onClick={() => {
                deleteOrder(getOrderList.id);
              }}
            />
          </Button>

          <Button variant="light" >
            <ModalOrder
              getOrder={getOrderList}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          </Button>
        </td>
    
    </>
  );
};
