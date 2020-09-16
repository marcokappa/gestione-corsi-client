import React from "react";
import { Nav, Row, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router";
//import "../pages/style/Dashboard.css";

const Side = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Nav
              className="col-md-12 d-none d-md-block bg-light sidebar"
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={10} id="page-content-wrapper">
            this is a test
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
