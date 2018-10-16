import React from 'react';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';

class StickyHeader extends React.Component {

  render() {
    return (
      <Navbar bg='whitesmoke' variant='light' sticky='top' className='header'>
        <Container  className='justify-content-center'>
          <Row>
            <Col>
              <Nav className='sticky-header1'>
                <Nav.Link href='#Knit' className='header-link'>Knit</Nav.Link>
                <Nav.Link href='#Felt' className='header-link'>Felt</Nav.Link>
                <Nav.Link href='#Crochet' className='header-link'>Crochet</Nav.Link>
                <Nav.Link href='#Denim' className='header-link'>Denim</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }

}

export default StickyHeader;