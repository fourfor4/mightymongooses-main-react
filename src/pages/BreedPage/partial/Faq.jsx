import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Faq.scss';

const Faq = () => {
  return (
    <section className='faq' id='breeding-faq'>
      <Container>
        <Row>
          <Col sm='12' md='12'>
            <div className='faq-header text-center'>
              <h2>frequently</h2>
              <h3>asked questions</h3>
            </div>
            <div className='faq-body'>
              <Accordion defaultActiveKey='0' flush>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    What are Mighty Mongooses?
                  </Accordion.Header>
                  <Accordion.Body>
                    This is the family of 8,888 warrior Mongooses striving to
                    protect their kingdom from enemy attack. The family consists
                    of 4,444 Male Mongoose NFT & 4,444 Female Mongoose NFT built
                    on the Ethereum network.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    How can I become part of the mongoose family?
                  </Accordion.Header>
                  <Accordion.Body>
                    You need to mint a Warrior Mongoose from our website. For
                    this, you need some ETH and metamask wallet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    When is the official release launch?
                  </Accordion.Header>
                  <Accordion.Body>
                    The exact launch date is kept secret. Follow the news on
                    discord to become a family member.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    How much does an MME NFT cost?
                  </Accordion.Header>
                  <Accordion.Body>
                    Each MME NFT will cost 0.07 ETH (+gas).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    How do I purchase a Mighty mongoose?
                  </Accordion.Header>
                  <Accordion.Body>
                    You will be able to mint directly on our website, using
                    Metamask. For Main Sale, a maximum of 20 MME NFT per
                    transaction will be allowed.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                  <Accordion.Header>
                    How do I purchase a Mighty mongoose?
                  </Accordion.Header>
                  <Accordion.Body>
                    Reveal will be immediately after every sale. Regular, Rare &
                    Super Rare traits are randomly assigned during minting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                  <Accordion.Header>
                    When & where can I breed a baby Mongoose?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    Breeding only deploys at 100% of sales from our official
                    website. Every account holder is limited to breed 5 baby
                    Mongoose.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                  <Accordion.Header>
                    How can I see my collection of Mongoose?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    You can see your entire collection in Open Sea or on our
                    official website, connecting the wallet with which you have
                    bought the NFTs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                  <Accordion.Header>
                    NFT Lovers Fund operation?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    It will operate freely but will be open to suggestions and
                    recommendations from our community. A specific 'Suggestion
                    NFT Lovers Club' channel will be opened on discord as well
                    as 'voting polls' where the Fund will frequently ask the
                    community's opinion on specific NFTs that are going to
                    collect under the NFT Lovers Club.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='9'>
                  <Accordion.Header>
                    What will the Fund purchase?
                  </Accordion.Header>
                  <Accordion.Body>
                    We will try to purchase some of the finest collections from
                    other artists. To try and support this mission we will fund
                    this club when our sales hit 30%. 2.5 % of all primary sales
                    to be allocated to the Fund. We will look for NFTs under
                    0.4Ξ but will not be limited to that price range.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
