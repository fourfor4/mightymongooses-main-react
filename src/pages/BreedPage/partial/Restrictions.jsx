import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Restrictions.scss';

const Restrictions = () => {
  return (
    <section className='any-restrictions' id='restrictions'>
      <Container>
        <Row>
          <Col sm='12' md='12'>
            <div className='Restrictions-header text-center'>
              <h2>any</h2>
              <h3>restrictions</h3>
            </div>

            <div className='Restrictions-body'>
              <p>
                🔔Some things to keep in mind. Newly created baby Mongoose will
                have a cool down time⏳ to participate for the next breed.
                Generally it will be from 12 to 48 hours⌚. Once cool down time
                is ended. You can also breed with other baby mongooses ONLY from
                your profile.
              </p>
              <br />
              <p>
                The only restriction that you need to keep in mind while
                breeding mongoose is that they cannot👎 breed with their parents
                or other mongooses from other accounts. In terms of population
                restrictions, there is a limit to the number of Baby Mongooses
                to be bred in general. The number should not cross 10,000 in
                total. Moreover, inside every user's account, you are 🛑limited
                to breed only a max of 5 baby Mongooses. We did this to make
                sure every holders have the ☺️chance to breed a 🙌cute baby
                mongoose. So by becoming a Mighty Mongoose NFT holder you are
                indirectly gaining access to 5 additional baby Mongoose NFT
                which in return increases the value of initial investment💸💸💸{' '}
              </p>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Restrictions;
