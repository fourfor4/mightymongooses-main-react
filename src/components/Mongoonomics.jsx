import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import './Mongoonomics.scss';

const Mongoonomics = () => {
  return (
    <section className='mongono' id='mongoonomics'>
      <div className='mongono-inner'>
        <Container className='mongono-container'>
          <Button size='lg' className='btn-mongono'>
            VIEW WHITELIST
          </Button>
          <Row>
            <Col sm='12' md='12'>
              <div className='mongono-header'>
                <h2>
                  the <br /> <span className='secondary'>mongoonomics</span>
                </h2>
              </div>
            </Col>
            <Col sm='12' md='12' lg='10'>
              <Row className='align-items-center'>
                <Col sm='12' md='4'>
                  <ul className='list'>
                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`1`}>
                            Snazzy Frost <br /> No# of Mogooses:{' '}
                            <strong>400</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 43 + '%' }}
                        >
                          <span className='value'>400</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Snazzy Frost</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Dazzling Career <br /> No# of Mogooses:{' '}
                            <strong>343</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 39 + '%' }}
                        >
                          <span className='value'>343</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Dazzling Career
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Corporate Scarlet <br /> No# of Mogooses:{' '}
                            <strong>555</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 51 + '%' }}
                        >
                          <span className='value'>555</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Corporate Scarlet
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Snazzy Frost <br /> No# of Mogooses:{' '}
                            <strong>24</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 49 + '%' }}
                        >
                          <span className='value'>888</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Sandy Bree</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Guarding Amber <br /> No# of Mogooses:{' '}
                            <strong>222</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 32 + '%' }}
                        >
                          <span className='value'>222</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Guarding Amber
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Patriot Candy <br /> No# of Mogooses:{' '}
                            <strong>366</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 41 + '%' }}
                        >
                          <span className='value'>366</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Patriot Candy
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Nifty Designer <br /> No# of Mogooses:{' '}
                            <strong>333</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 39 + '%' }}
                        >
                          <span className='value'>333</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Nifty Designer
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Fiery lady <br /> No# of Mogooses:{' '}
                            <strong>201</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 31 + '%' }}
                        >
                          <span className='value'>201</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Fiery lady</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Airline Stewardess <br /> No# of Mogooses:{' '}
                            <strong>111</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 26 + '%' }}
                        >
                          <span className='value'>111</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Airline Stewardess
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Culinary Artist <br /> No# of Mogooses:{' '}
                            <strong>333</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 39 + '%' }}
                        >
                          <span className='value'>333</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Culinary Artist{' '}
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Mrs. Claus <br /> No# of Mogooses:{' '}
                            <strong>244</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 34 + '%' }}
                        >
                          <span className='value'>244</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Mrs. Claus</span>
                    </li>
                  </ul>
                </Col>
                <Col sm='12' md='4'>
                  <ul className='list'>
                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`1`}>
                            Sparring Fly <br /> No# of Mogooses:{' '}
                            <strong>33</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 22 + '%' }}
                        >
                          <span className='value'>33</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Sparring Fly</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Spiritual goddess <br /> No# of Mogooses:{' '}
                            <strong>29</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 22 + '%' }}
                        >
                          <span className='value'>29</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Spiritual goddess
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Tidal Buccaneer <br /> No# of Mogooses:{' '}
                            <strong>234</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 33 + '%' }}
                        >
                          <span className='value'>234</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Tidal Buccaneer
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Mighty Emperor <br /> No# of Mogooses:{' '}
                            <strong>54</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 23 + '%' }}
                        >
                          <span className='value'>54</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Mighty Emperor
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Dewin Alchemist <br /> No# of Mogooses:{' '}
                            <strong>123</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 27 + '%' }}
                        >
                          <span className='value'>123</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Dewin Alchemist
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Serviceman <br /> No# of Mogooses:{' '}
                            <strong>35</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 22 + '%' }}
                        >
                          <span className='value'>35</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Serviceman</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Bizarre Yo <br /> No# of Mogooses:{' '}
                            <strong>112</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 26 + '%' }}
                        >
                          <span className='value'>112</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Bizarre Yo</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Jr. Undraped <br /> No# of Mogooses:{' '}
                            <strong>533</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 50 + '%' }}
                        >
                          <span className='value'>533</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Jr. Undraped</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Lurcher Smug <br /> No# of Mogooses:{' '}
                            <strong>277</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 36 + '%' }}
                        >
                          <span className='value'>277</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Lurcher Smug</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            The Escaper <br /> No# of Mogooses:{' '}
                            <strong>427</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 44 + '%' }}
                        >
                          <span className='value'>427</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>The Escaper</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Mighty Young <br /> No# of Mogooses:{' '}
                            <strong>195</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 31 + '%' }}
                        >
                          <span className='value'>195</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Mighty Young</span>
                    </li>
                  </ul>
                </Col>
                <Col sm='12' md='4'>
                  <ul className='list'>
                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`1`}>
                            Jr. Mandrake <br /> No# of Mogooses:{' '}
                            <strong>286</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 36 + '%' }}
                        >
                          <span className='value'>286</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Jr. Mandrake</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Worker Joe <br /> No# of Mogooses:{' '}
                            <strong>122</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 27 + '%' }}
                        >
                          <span className='value'>122</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Worker Joe</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Croaker Mate <br /> No# of Mogooses:{' '}
                            <strong>390</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 42 + '%' }}
                        >
                          <span className='value'>390</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Croaker Mate</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Snazzy Frost <br /> No# of Mogooses:{' '}
                            <strong>299</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 37 + '%' }}
                        >
                          <span className='value'>299</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Daring Slate</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Corporate AK <br /> No# of Mogooses:{' '}
                            <strong>290</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 36 + '%' }}
                        >
                          <span className='value'>290</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Corporate AK</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Scrawny Chap <br /> No# of Mogooses:{' '}
                            <strong>350</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 40 + '%' }}
                        >
                          <span className='value'>350</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>Scrawny Chap</span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Clumsy Corporate <br /> No# of Mogooses:{' '}
                            <strong>476</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 47 + '%' }}
                        >
                          <span className='value'>476</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Clumsy Corporate
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Silly Gloss Designer <br /> No# of Mogooses:{' '}
                            <strong>400</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 43 + '%' }}
                        >
                          <span className='value'>400</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Silly Gloss Designer
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Wild Attonery <br /> No# of Mogooses:{' '}
                            <strong>125</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 27 + '%' }}
                        >
                          <span className='value'>125</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Wild Attonery
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Spiffy Gunman <br /> No# of Mogooses:{' '}
                            <strong>67</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 24 + '%' }}
                        >
                          <span className='value'>67</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Spiffy Gunman
                      </span>
                    </li>

                    <li className='list-item'>
                      <OverlayTrigger
                        placement={'top'}
                        overlay={
                          <Tooltip id={`2`}>
                            Heavenly Tangy <br /> No# of Mogooses:{' '}
                            <strong>35</strong>
                          </Tooltip>
                        }
                      >
                        <div
                          className='item-badge'
                          style={{ minWidth: 22 + '%' }}
                        >
                          <span className='value'>35</span>
                        </div>
                      </OverlayTrigger>
                      <span className='title text-uppercase'>
                        Heavenly Tangy
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Mongoonomics;
