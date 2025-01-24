import { Row, Col } from "react-bootstrap";
import { Table } from "./Table";
export const TableList = ({ table = [], loadTable }) => {
  return (
    <Row className="gy-3 mt-5 pt-5">
      {table.map((el) => {
        return (
          <Col
            key={el.id}
            xs={12}
            md={6}
            lg={6}
            className=" d-flex justify-content-between"
          >
            <Table table={el} loadTable={loadTable} />
          </Col>
        );
      })}
    </Row>
  );
};
