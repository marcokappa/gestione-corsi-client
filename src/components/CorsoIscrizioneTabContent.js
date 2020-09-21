import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  Jumbotron,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Iscrizioni from "./Iscrizioni";

const CorsoIscrizioneTabContent = ({ corso, iscrizioni }) => {
  return (
    <Tab.Content>
      <Tab.Pane eventKey="iscrizioni">
        <Col className="px-2 mt-2">
          <Iscrizioni iscrizioni={iscrizioni} />
        </Col>
      </Tab.Pane>
    </Tab.Content>
  );
};

export default CorsoIscrizioneTabContent;
