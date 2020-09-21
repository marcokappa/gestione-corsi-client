import React from "react";
import {
  Col,
  Container,
  Form,
  FormLabel,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import CorsoInfoTabContent from "../components/CorsoInfoTabContent";
import CorsoIscrizioneTabContent from "../components/CorsoIscrizioneTabContent";
import NavBar from "../components/Navbar";

const Corso = (props) => {
  let idCorso = props.match.params.id;
  let corso = {
    id: 1,
    sigla: "SA1",
    titolo: "32° corso di scialpinismo",
    direttore: "Cita Arainna",
    viceDirettore: "Picogna Ippolito",
    segretario: "Knezevich Marco",
  };
  let iscrizioni = [
    {
      id: 1,
      nome: "gino",
      cognome: "pilotino",
      sesso: "M",
      eta: 47,
      isCaparra: true,
      isSaldo: true,
      isCertificatoMedico: false,
      isBollinoCai: false,
      isNoleggio: true,
    },
    {
      id: 2,
      nome: "emma",
      cognome: "bianchi",
      sesso: "F",
      eta: 28,
      isCaparra: false,
      isSaldo: false,
      isCertificatoMedico: false,
      isBollinoCai: true,
      isNoleggio: false,
    },
  ];
  return (
    <>
      <NavBar />

      <Tab.Container id="left-tabs-example" defaultActiveKey="iscrizioni">
        <Col>
          <Nav variant="tabs" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="info">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="iscrizioni">Iscrizioni</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bilancio">Bilancio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cassa">Cassa</Nav.Link>
            </Nav.Item>
          </Nav>

          <CorsoInfoTabContent corso={corso} />
          <CorsoIscrizioneTabContent corso={corso} iscrizioni={iscrizioni} />

          <Tab.Content>
            <Tab.Pane eventKey="bilancio">
              <Col>
                <h1>Bilancio</h1>
              </Col>
            </Tab.Pane>

            <Tab.Pane eventKey="cassa">
              <Col>
                <h1>Cassa</h1>
              </Col>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </>
  );
};

//

export default Corso;
