import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RandomJoke from "../components/RandomJoke/RandomJoke";
import "./Homepage.css";
import { useSelector } from "react-redux";
import { selectPunchline } from "../store/joke/selectors";
import loading from "../images/loading.gif";
import loaded from "../images/loaded.gif";
import Share from "../components/Share";

export default function Homepage() {
  const punchline = useSelector(selectPunchline);

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
        <Col className="homepage-joke-gif">
          <img
            className="homepage-kitty"
            src={punchline ? loaded : loading}
          ></img>
        </Col>
        <Col className="homepage-share-col">
          <Share />
        </Col>
      </Row>
    </Container>
  );
}
