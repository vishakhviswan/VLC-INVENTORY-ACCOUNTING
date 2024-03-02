import React from "react";
import {
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

import "../Containers.css";
function InventoryVouchers() {
  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col sm={3}>
            <FormGroup as={Row}>
              <FormLabel column>Party A/c Name</FormLabel>
              <Col>
                <FormControl type="text" />
              </Col>
            </FormGroup>
          </Col>
          <Col sm={6} />
          <Col sm={3}>
            <FormGroup as={Row}>
              <FormLabel column>Date</FormLabel>
              <Col>
                <FormControl type="date" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm={3}>
            <FormGroup as={Row}>
              <FormLabel column>Source Godown</FormLabel>
              <Col>
                <FormControl />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <div className="headingLine mt-1"></div>
        <Row className="largeDisplay">
          <Col sm={3}>
            <div>Name of Item</div>
          </Col>
          <Col sm={6} />
          <Col sm={1}>
            <div>Quantity</div>
          </Col>
          <Col sm={1}>
            <div>Rate per</div>
          </Col>
          <Col sm={1}>
            <div>Amount</div>
          </Col>
        </Row>
        <div className="headingLineTwo mt-1"></div>

        <Row className="mt-2 largeDisplay">
          <Col sm={3}>
            <FormControl />
          </Col>
          <Col sm={6} />
          <Col sm={1}>
            <FormControl />
          </Col>
          <Col sm={1}>
            <FormControl />
          </Col>
          <Col sm={1}>
            <FormControl />
          </Col>
        </Row>
        <div className="footerDiv">
          <Col sm={12}>
            <Row>
              <Col sm={9} />
              <Col sm={3}>
                <div className="headingLineTwo mt-1"></div>
              </Col>
            </Row>
            <Row>
              <Col sm={9} />
              <Col>
                <FormControl />
              </Col>
              <Col />
              <Col>
                <FormControl />
              </Col>
            </Row>
            <Row>
              <Col sm={9} />
              <Col sm={3}>
                <div className="headingLineTwo mt-1"></div>
              </Col>
            </Row>
          </Col>
        </div>

        {/* *****************Small Disply********************** */}

        <div className="smallDisply">
          <div>1.</div>
          <Row className="mt-1">
            <Col sm={12} xs={12}>
              <FormGroup as={Row}>
                <FormLabel sm={4} xs={4} column>
                  Name of Item
                </FormLabel>
                <Col sm={8} xs={8}>
                  <FormControl />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm={12} xs={12}>
              <FormGroup as={Row}>
                <FormLabel sm={4} xs={4} column>
                  Quantity
                </FormLabel>
                <Col sm={8} xs={8}>
                  <FormControl />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm={12} xs={12}>
              <FormGroup as={Row}>
                <FormLabel sm={4} xs={4} column>
                  Rate
                </FormLabel>
                <Col sm={8} xs={8}>
                  <FormControl />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm={12} xs={12}>
              <FormGroup as={Row}>
                <FormLabel sm={4} xs={4} column>
                  Amount
                </FormLabel>
                <Col sm={8} xs={8}>
                  <FormControl />
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default InventoryVouchers;
