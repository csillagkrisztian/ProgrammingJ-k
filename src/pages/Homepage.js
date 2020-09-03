import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RandomJoke from "../components/RandomJoke";
import "./Homepage.css";

export default function Homepage() {
  return (
    <Container fluid className="homepage-container">
      <Row className="homepage-title-row">
        <h1 className="homepage-title"> Welcome to Programming Jöök</h1>
      </Row>
      <Row className="homepage-joke-row">
        <Col className="homepage-joke-col">
          <h2 className="homepage-joke-title">Here is a Jöök for you!</h2>
          <RandomJoke />
        </Col>
        <Col className="homepage-joke-gif"></Col>
      </Row>
    </Container>
  );
}
