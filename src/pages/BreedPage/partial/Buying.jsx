import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Buying.scss';

const Buying = () => {
  return (
    <section className='Buying' id='buying'>
      <Container>
        <Row>
          <Col sm='12' md='12'>
            <div className='Buying-header text-center'>
              <h2>buying</h2>
              <h3>proces</h3>
            </div>

            <div className='Buying-body'>
              <p>
                The process starts by signing into your account using wallet👛
                and clicking on the breed button from our website, My collection
                tab . Once you’ve clicked on it, you would get to choose the two
                parent mongooses you want to breed. You must choose one as Male
                and the other as Female. Once you’ve chosen the mongooses, the
                platform will show you the birthing fee💰 and the estimated
                ⛽gas fee applicable. If you agree on the price, you give your
                consent to the breeding by clicking on the button that says:
                ‘Ok, let's breed.
              </p>
              <br />
              <p> </p>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Buying;
