import { Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { BiArrowBack } from "react-icons/bi";
export const OrderCategory = () => {
const navigate=useNavigate()
  return (
    <>
      <Sidebar />
      <Row className=" d-flex  justify-content-between pt-5 ">
        <Col xs={12} md={6} lg={4}>
          <Link
            to={`/order/${false}`}
            className=" text-decoration-none text-reset text-center"
          >
            <Card style={{ width: "18rem" }} className="my-5">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Ordini Da Saldare</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Link
            to={`/order/${true}`}
            className=" text-decoration-none text-reset text-center"
          >
            <Card style={{ width: "18rem" }} className="my-5">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Ordini Saldati</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
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
