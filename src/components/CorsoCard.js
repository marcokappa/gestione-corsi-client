import React, { useState, useEffect } from "react";
import { Card, Button, FormLabel, Col, Row } from "react-bootstrap";

import corso_SA1_64 from "../img/corso_SA1_64.png";
import corso_SA2_64 from "../img/corso_SA2_64.png";
import corso_AR1_64 from "../img/corso_AR1_64.png";
import corso_AR2_64 from "../img/corso_AR2_64.png";
import corso_AG1_64 from "../img/corso_AG1_64.png";
import corso_AG2_64 from "../img/corso_AG2_64.png";
import corso_ACG1_64 from "../img/corso_ACG1_64.png";
import corso_AL1_64 from "../img/corso_AL1_64.png";
import corso_AL2_64 from "../img/corso_AL2_64.png";
import corso_A1_64 from "../img/corso_A1_64.png";
import "../styles/card-style.css";
import { Link } from "react-router-dom";

const CorsoCard = ({ corso }) => {
  let img = null;
  let link = null;
  if (corso) {
    link = "/corso/" + corso.id;
    switch (corso.sigla) {
      case "SA1":
        img = corso_SA1_64;
        break;
      case "SA2":
        img = corso_SA2_64;
        break;
      case "AR1":
        img = corso_AR1_64;
        break;
      case "AR2":
        img = corso_AR2_64;
        break;
      case "AG1":
        img = corso_AG1_64;
        break;
      case "AG2":
        img = corso_AG2_64;
        break;
      case "ACG1":
        img = corso_ACG1_64;
        break;
      case "AL1":
        img = corso_AL1_64;
        break;
      case "AL2":
        img = corso_AL2_64;
        break;
      case "A1":
        img = corso_A1_64;
        break;

      default:
        break;
    }
  }
  return (
    <>
      <Card>
        <Card.Header as="h3">
          <Row>
            <Col>{corso.sigla}</Col>
            <Col>
              <img src={img} alt={corso.sigla} />
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <Card.Title>{corso.titolo}</Card.Title>
          <Card.Text>
            <FormLabel>Direttore: {corso.direttore}</FormLabel>
            <FormLabel>Vice Direttore: {corso.viceDirettore}</FormLabel>
            <FormLabel>Segretario: {corso.segretario}</FormLabel>
          </Card.Text>
          <Link to={link}>
            <Button variant="success">Vai al corso</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CorsoCard;
