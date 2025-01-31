import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiJira,
  SiPycharm,
  SiNotion 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
    </Row>
  );
}

export default Toolstack;
