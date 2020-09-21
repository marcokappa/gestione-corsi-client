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

const CorsoInfoTabContent = ({ corso }) => {
  return (
    <Tab.Content>
      <Tab.Pane eventKey="info">
        <Col>
          <Form className="rounded border border-secondary px-5 mt-2">
            <Form.Group as={Row} controlId="infoGroup">
              <Form.Label column sm={1}>
                Direttore:
              </Form.Label>
              <Form.Label column sm={11} className="font-weight-bold">
                {corso.direttore}
              </Form.Label>

              <Form.Label column sm={1}>
                Vice Direttore:
              </Form.Label>
              <Form.Label className="font-weight-bold" column sm={11}>
                {corso.viceDirettore}
              </Form.Label>

              <Form.Label column sm={1}>
                Segretario/i:
              </Form.Label>
              <Form.Label className="font-weight-bold" column sm={11}>
                {corso.segretario}
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Tab.Pane>
    </Tab.Content>
  );
};

export default CorsoInfoTabContent;
