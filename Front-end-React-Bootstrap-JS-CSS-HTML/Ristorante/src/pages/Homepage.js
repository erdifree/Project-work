import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/css/style.css";
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import "../components/css/footerStyle.css";
import { Col, Row } from "react-bootstrap";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { BiCopyright } from "react-icons/bi";
import welcome from "../components/img/welcome.jpg";

import Image from "react-bootstrap/Image";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          
        </Col>
        <Col className="footer mt-5 bg-black text-white text-center fixed-bottom bg-opacity-50">
          <Row className=" d-flex justify-content-between">
            <Col id="text" className=" me-5">
              <Col id="text">Contatti:</Col>
              <BsFillTelephoneFill style={{ color: "white" }} />: 08018160035
              <GiSmartphone style={{ color: "white" }} />: 3896492143
              <Col />
              <AiOutlineInstagram size={"30px"} className=" text-info" />
              <a
                href="https://www.linkedin.com/in/erdison-dosti-6943b7180/"
                target="_blank"
              >
                <AiFillLinkedin size={"30px"} className=" text-info" />
              </a>
              <Col>
                <BiCopyright className=" text-info" /> by Erdison Dosti
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
