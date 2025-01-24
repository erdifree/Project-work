import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Offcanvas } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Img from "./img/logonav.avif";
import { AiFillSetting } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/css/footerStyle.css";

export const Sidebar = ({}) => {
  const [show, setShow] = useState(true);

  const autenticazione = (param) => {
    const pin = [1, 4, 1, 8];
    if (param === pin) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Navbar
      bg="dark"
      className=" fixed-top mb-5 d-flex justify-content-between"
    >
      <Col sx={12} lg={2} className=" d-flex justify-content-center">
        <Link to="/">
          <Button variant="outline-success ">
            <AiFillSetting />
            Home
          </Button>
        </Link>
      </Col>
      <Col sx={12} sm={3} lg={2} className="d-flex justify-content-center">
        <Link to="/admin">
          <Button variant="outline-success">
            <AiFillSetting />
            Admin
          </Button>
        </Link>
      </Col>
      <Col sx={12} lg={2} className="d-flex justify-content-center">
        <Link to="/table">
          <Button variant="outline-success">
            <AiFillSetting />
            Tavoli
          </Button>
        </Link>
      </Col>
    </Navbar>
  );
};
