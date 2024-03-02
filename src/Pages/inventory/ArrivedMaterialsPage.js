import React from 'react'
import  NavbarHeader  from '../../Components/Navbar'
import { Col, Container, Row } from 'react-bootstrap'
import ArrivedMaterials from '../../containers/inventory/ArrivedMaterials'
import ArrivalsTopBar from '../../containers/inventory/ArrivalsTopBar';

import {TopContext} from '../../store/ArrivalsContext'
function ArrivedMaterialsPage() {
    return (
      <div className="arrivedMaterials_ParentDiv">
        <div className="arrivedMaterials_ChildDiv">
          <TopContext>
          <NavbarHeader />
            <ArrivalsTopBar />
          <Container>
            <Row>
              <Col md={12} lg={12} sm={12}>
                <ArrivedMaterials />
              </Col>
            </Row>
          </Container>
          </TopContext>
        </div>
      </div>
    );
}

export default ArrivedMaterialsPage
