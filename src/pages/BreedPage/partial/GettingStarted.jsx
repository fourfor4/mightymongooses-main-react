import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './GettingStarted.scss';

const GettingStarted = () => {
  return (
    <div className='gettingStarted-layout' id='getting-started'>
      <section className='gettingStarted'>
        <Container>
          <Row>
            <Col sm='12' md='12' className='text-center'>
              <div className='gettingStarted-header'>
                <h2>getting</h2>
                <h3>started</h3>
              </div>
              <div className='gettingStarted-body'>
                <p>
                  Breeding🥚 Mighty Mongooses is one of the unique feature
                  Introduced in this project. Every holder🙌 can breed a cute
                  baby mongoose using their parents. Holders should have at
                  least 1 male🚹 and 1 female 🚺 Mongoose in their account.
                  Breeding is only activated after 90% sales and it's done in a
                  way that minting baby Mongooses shouldn't effect the mighty
                  mongooses drop. Every Baby Mongoose will be magically🧙‍♂️ unique
                  and each one has its own traits. Our artist👨‍🎨 have made sure
                  that every baby Mongoose got a heavenly attributes to attract
                  other users to buy. I am sure you all gonna love💘 them.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='breedingInfo' id='breeding'>
        <Container>
          <div className='breedingInfo-header text-center'>
            <h3>breeding</h3>
            <h2>mongooses</h2>
          </div>
          <div className='breedingInfo-body'>
            <p>
              Breeding generally takes 4 to 5 days. After the breeding process
              ends, you will get the beautiful looking baby warrior🤺. It will
              have a unique number attached to it and a small bio📝 written
              about his/her parents. The newly bred Mongoose will be added to
              your profile – and that’s how the breeding process will end
            </p>
            <p />
            <div className='details-body text-center'>
              <h5>
                You need a male and female Mongoo to participate in Breeding
              </h5>
              <p />
            </div>
          </div>
          <div className='breedingInfo-body'>
            <Row>
              <Col sm='12' md='8'>
                <Row>
                  <Col sm='12' md='4'>
                    <div className='breedingInfo-item'>
                      <Image src='./images/1.png' fluid />
                      <div className='breedingInfo-item-body'>
                        <h5 className='title'>
                          Meet Mr. <span className='secondary'>Lee</span>
                        </h5>
                        <h6 className='subtitle'>He is a dare devil</h6>
                      </div>
                    </div>
                  </Col>
                  <Col sm='12' md='4'>
                    <div className='breedingInfo-item'>
                      <Image src='./images/2.png' fluid />
                      <div className='breedingInfo-item-body'>
                        <h5 className='title'>
                          Amazing Sandy <span className='secondary'>Bree</span>
                        </h5>
                        <h6 className='subtitle'>Law keep of the Kingdom</h6>
                      </div>
                    </div>
                  </Col>
                  <Col sm='12' md='4'>
                    <div className='breedingInfo-item'>
                      <Image src='./images/3.png' fluid />
                      <div className='breedingInfo-item-body'>
                        <h5 className='title'>
                          Office <span className='secondary'>Sandy</span>
                        </h5>
                        <h6 className='subtitle'>Gaurdian of the City</h6>
                      </div>
                    </div>
                  </Col>
                  <Col sm='12' md='4'>
                    <div className='breedingInfo-item'>
                      <Image src='./images/4.png' fluid />
                      <div className='breedingInfo-item-body'>
                        <h5 className='title'>
                          Silly Gloss <span className='secondary'>Tangy</span>
                        </h5>
                        <h6 className='subtitle'>
                          He lives in the fantasy world
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col sm='12' md='4'>
                    <div className='breedingInfo-item'>
                      <Image src='./images/5.png' fluid />
                      <div className='breedingInfo-item-body'>
                        <h5 className='title'>
                          Caring <span className='secondary'>Mandy</span>
                        </h5>
                        <h6 className='subtitle'>
                          She keeps the community happy
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col className='bottom-header-layout'>
                    <div className='bottom-header'>
                      <h3>
                        Mighty <br /> Mongooses
                      </h3>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col sm='12' md='4' />
            </Row>
          </div>
        </Container>
      </section>
      <Container>
        <Row>
          <Col sm='12'>
            <p>
              The process starts by signing into your account using wallet👛 and
              clicking on the breed button from our website, My collection tab .
              Once you’ve clicked on it, you would get to choose the two parent
              mongooses you want to breed. You must choose one as Male and the
              other as Female. Once you’ve chosen the mongooses, the platform
              will show you the birthing fee💰 and the estimated ⛽gas fee
              applicable. If you agree on the price, you give your consent to
              the breeding by clicking on the button that says: ‘Ok, let's
              breed.’
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GettingStarted;
