import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import MightyMaleTabs from './MightyMaleTabs';
import MightyFemaleTabs from './MightyFemaleTabs';
import MightyBabiesTabs from './MightyBabiesTabs';
import './MightyTabs.scss';

const MightyTabs = () => {
  return (
    <section className='mighty-tabs'>
      <Container>
        <Tab.Container className='left-tabs' defaultActiveKey='mightyMale'>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='mightyMale'>Mighty Male</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='mightyFemale'>Mighty Female</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='mightyBabies'>Mighty Babies</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} md={9}>
              <Tab.Content>
                <Tab.Pane eventKey='mightyMale'>
                  <MightyMaleTabs />
                </Tab.Pane>
                <Tab.Pane eventKey='mightyFemale'>
                  <MightyFemaleTabs />
                </Tab.Pane>
                <Tab.Pane eventKey='mightyBabies'>
                  <MightyBabiesTabs />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default MightyTabs;
