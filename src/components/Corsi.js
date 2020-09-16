import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, CardDeck } from "react-bootstrap";
import CorsoCard from "./CorsoCard";

const Corsi = (props) => {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const [anno, setAnno] = useState(nowYear);
  const [anni, setAnni] = useState([]);

  const [corsi, setCorsi] = useState([]);

  useEffect(() => {
    setAnni([2020, 2019, 2018]);
    setCorsi([
      {
        sigla: "SA1",
        titolo: "32° corso di scialpinismo",
        direttore: "Cita Arainna",
        viceDirettore: "Picogna Ippolito",
        segretario: "Knezevich Marco",
      },
      {
        sigla: "AR1",
        titolo: "43° corso di roccia",
        direttore: "Picotti Carlo",
        viceDirettore: "Roberto Pivotti",
        segretario: "Elena Dalcul",
      },
      {
        sigla: "A1",
        titolo: "24° corso base di alpinismo",
        direttore: "Michelini Roberto",
        viceDirettore: "Licalsi Antonino",
        segretario: "Giacomini Alessandro",
      },
    ]);
  }, []);

  const onAnnoChange = (e) => {
    setAnno(e.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Form>
            <Form.Group controlId="annoCorsoControlSelect">
              <Form.Label>Anno di corso</Form.Label>
              <Form.Control as="select" placeholder="Anno" className="mr-sm-2">
                {anni.map((anno) => (
                  <option>{anno}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <CardDeck>
          {corsi.map((corso) => (
            <CorsoCard corso={corso} />
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default Corsi;
