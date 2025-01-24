import { Order } from "./Order";
import { Row, Col, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export const OrderList = ({
  data = [],

  payed,
  deleteOrder,
}) => {
  console.log(" ORDERLIST", data);
  return (
    <>
      {payed ? (
        <Row className="gy-3 pt-5 mt-5">
          <Table striped bordered hover size="sm">
            <thead className=" text-bg-light text-center">
              <tr>
                <th>Id Order</th>
                <th>Date of Created Order</th>
                <th>Managment Order</th>
              </tr>
            </thead>
            <tbody className=" text-bg-light text-center">
              {data.map((el) => {
                return (
                <tr className=" text-bg-light" key={el.id}>
                    <Order getOrderList={el} deleteOrder={deleteOrder} /></tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      ) : (
        <Alert variant="info" className=" text-center text-dark text-uppercase">
          Non ci sono Ordini Da Visionare
        </Alert>
      )}
    </>
  );
};
