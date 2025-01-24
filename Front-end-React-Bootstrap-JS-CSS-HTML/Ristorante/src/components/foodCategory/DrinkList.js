import { Drink } from "./Drink";
import { Row, Col, Button } from "react-bootstrap";

import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const DrinkList = ({ drinks = [], addDrink, idOrder }) => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Row className="gy-3">
        {drinks.map((el) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={3}
              key={el.id}
              className=" d-flex justify-content-between"
            >
              <Drink drink={el} addDrink={addDrink} />
            </Col>
          );
        })}

        {idOrder !== null ? (
          <Row className=" d-flex justify-content-center fixed-bottom">
            <Col className=" d-flex justify-content-center">
              <Button
                className=" text-light btn-sm  bg-black btn-outline-dark mb-5"
                size={"32px"}
                onClick={() => {
                  navigate(`/table/${tableId}/drinkscategory/`);
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
                  navigate(`/table/${tableId}/drinkscategory/`);
                }}
              >
                <BiArrowBack size={"32px"} />
                Back
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </>
  );
};
