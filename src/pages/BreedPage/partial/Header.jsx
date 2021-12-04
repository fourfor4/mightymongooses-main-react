import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Image,
  Modal,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import './Header.scss';

const Header = ({ handleCopyAddress, handleDisconnect }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1199px)').matches
  );
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    const header = ref.current;
    // const sticky = header.offsetTop;
    const scrollcallback = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollcallback);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    const mql = window.matchMedia('(max-width: 1199px)');
    mql.addEventListener('change', handler);
  }, []);

  const handleNavigate = () => {
    if (matches) {
      toggleRef.current.click();
      ref.current.classList.add('support-header');
      setTimeout(() => {
        ref.current.classList.remove('header-bg');
      }, 20);
    } else {
      ref.current.classList.remove('support-header');
    }
  };

  const handleToggle = () => {
    if (matches) {
      ref.current.classList.add('header-bg');
    } else {
      ref.current.classList.remove('header-bg');
    }
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <header className={!matches ? 'header' : 'header support-header'} ref={ref}>
      <Navbar expand='xl'>
        <Container>
          <Navbar.Brand href='/'>
            <Image src='./images/logo.png' roundedCircle />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={handleToggle}
            ref={toggleRef}
          />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link onClick={handleNavigate} href='#getting-started'>
                Getting Started
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#buying'>
                Buying
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#breeding'>
                Breeding
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#restrictions'>
                Restrictions
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#breeding-faq'>
                Breeding Faq
              </Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link
                onClick={(e) => handleCopyAddress(e)}
                href='#copy-address'
              >
                Copy Address
              </Nav.Link>
              <Nav.Link onClick={(e) => handleDisconnect(e)} href='#disconnect'>
                Disconnect
              </Nav.Link>
              <Nav.Link onClick={handleModalOpen} href='#'>
                <Image src='./images/header_right.png' roundedCircle />
                <span className='ms-1'>My Profile</span>
              </Nav.Link>
              {/* <Dropdown>
								<Dropdown.Toggle variant="clear" id="dropdown-basic">
									
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Modal Popup */}
      <Modal
        show={showModal}
        className='modal-profile'
        centered
        size='lg'
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase'>Profile Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm='12' md='12' lg='8'>
              <Form>
                <Row>
                  <Col sm='12' md='12'>
                    <div className='form-group'>
                      <Form.Label>Username</Form.Label>
                      <Form.Control type='text' placeholder='Username' />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm='12' md='12'>
                    <div className='form-group'>
                      <Form.Label>Bio</Form.Label>
                      <Form.Control
                        type='text'
                        as='textarea'
                        rows={3}
                        placeholder='Bio'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm='12' md='12'>
                    <div className='form-group'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type='email' placeholder='Email Address' />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm='12' md='12'>
                    <div className='submit-actions'>
                      <Button type='submit' variant='danger'>
                        Update
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col sm='12' md='12' lg='4'>
              <div className='profile'>
                <h5 className='text-center'>Profile Image</h5>
                <Image
                  src='./images/1.png'
                  className='profile-image mb-4'
                  roundedCircle
                  fluid
                />

                <div className='profile-banner'>
                  <h5 className='text-center'>Profile Banner</h5>
                  <Image
                    src='./images/1.png'
                    className='profile-banner'
                    fluid
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
