import { Food } from "./Food";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";

export const FoodList = ({ food = [], addFood, idOrder }) => {
  console.log("sono addfood nel food list", { addFood });
  const { tableId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Row className="gy-3">
        {food.map((el) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={3}
              key={el.id}
              className=" d-flex justify-content-between"
            >
              <Food food={el} addFood={addFood} />
            </Col>
          );
        })}
      </Row>
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
    </>
  );
};
