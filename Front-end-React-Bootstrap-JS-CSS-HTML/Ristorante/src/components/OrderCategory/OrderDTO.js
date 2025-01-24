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
export const OrderDTO = ({
  getOrderList,
  deleteOrder,
  dataDto,
  updatePayDto,
  loadOrdersDTO,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("ORDER DTO SINGOLO", dataDto);
  const flag = false;
 
  return (
    <>
      <Card className="c_task " style={{ width: "18rem" }}>
        <Button
          className=" btn btn-dark accordion-button "
          onClick={handleShow}
        >
          <Card.Img variant="top" src={LogoOrdineCassa} />
        </Button>
        <Card.Body>
          <h4 className=" text-center">Ordine Tavolo N: {dataDto.table_id}</h4>
          <ModalOrderDTO
            dataDto={dataDto}
            updatePayDto={updatePayDto}
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            loadOrdersDTO={loadOrdersDTO}
          />
        </Card.Body>
      </Card>
    </>
  );
};
