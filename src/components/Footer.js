import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rajie</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rajarajeswari</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
