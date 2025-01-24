import { Button, Card, Row } from "react-bootstrap";

import { Col } from "react-bootstrap";

export const Food = ({ food, addFood }) => {
  console.log(" fooooood", { food });

  console.log("Sono addFood del food", { addFood });
  return (
    <>
      <Card className="c_task mt-5 bg-dark text-light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={food.img}
          style={{ width: "100%", height: "12rem" }}
        />
        <Card.Body>
          <div className=" text-center">
            <h4>{food.name}</h4>
          </div>
          <div> {food.description}</div>
        </Card.Body>
        <Card.Footer>
          <Row className=" d-flex justify-content-end">
            <Col>
              <Button
                variant="dark"
                onClick={() => {
                  addFood(food);
                }}
              >
                Add to cart
              </Button>
            </Col>

            <Col className="   text-end mt-1  fw-bold">
              &euro; {food.price.toFixed(2)}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
