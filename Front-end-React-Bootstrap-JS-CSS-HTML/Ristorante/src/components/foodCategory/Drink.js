import { Button, Card, Row } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { OrderList } from "../OrderCategory/OrderList";

import { Col } from "react-bootstrap";

export const Drink = ({ drink, addDrink }) => {
  console.log(" fooooood", { drink });

  return (
    <>
      <Card
        className="c_task mt-5  bg-dark text-light"
        style={{ width: "18rem" }}
      >
        <Card.Img
          variant="top"
          src={drink.img}
          style={{ width: "18rem", height: "22rem" }}
        />
        <Card.Body>
          <div className=" text-center">
            <h4>{drink.name}</h4>
          </div>
          <div> {drink.description}</div>
        </Card.Body>
        <Card.Footer>
          <Row className=" d-flex justify-content-end">
            <Col>
              <Button
                variant="dark"
                onClick={() => {
                  addDrink(drink);
                }}
              >
                Add to cart
              </Button>
            </Col>

            <Col className="   text-end mt-1  fw-bold">
              &euro; {drink.price.toFixed(2)}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
