import { Order } from "./Order";
import { Row, Col, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { OrderDTO } from "./OrderDTO";
export const OrderListDTO = ({
  dataDto = [],
  updatePayDto,
  payed,
  deleteOrder,
  loadOrdersDTO,
}) => {
  console.log(" ORDERT DT", dataDto);
  return (
    <>
        <Row className="gy-3 pt-5 mt-5">
          {dataDto.length !== 0 ? (
            <>
              {dataDto.map((el) => {
                return (
                  <Col xs={4} key={el.id}>
                    <OrderDTO
                      updatePayDto={updatePayDto}
                      dataDto={el}
                      loadOrdersDTO={loadOrdersDTO}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <Alert
              variant="info"
              className=" text-center text-dark text-uppercase"
            >
              Non ci sono Ordini Aperti
            </Alert>
          )}
        </Row>
     
    </>
  );
};
