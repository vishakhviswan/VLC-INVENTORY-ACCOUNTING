import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavbarHeader from '../../Components/Navbar'
import ProcessingInput from '../../containers/inventory/ProcessingInput';
import ProcessingOutput from '../../containers/inventory/ProcessingOutput';

function ProcessingPage() {
    return (
      <div>
        <NavbarHeader />
        <Container>
          <Row>
            <Col>
              <ProcessingInput/>
            </Col>
            <Col>
              <ProcessingOutput/>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ProcessingPage
