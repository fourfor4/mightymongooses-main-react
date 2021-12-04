import React, { useState, useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import Web3 from 'web3';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import FlipClock from './FlipClock';
import MongooseABI from '../../../abi/MightyMongoose.json';
import { mongooseContractAddress } from '../../../contracts';

import { useTokenPrice } from '../../../hooks';
import './Collections.scss';
import './Counter.scss';

let tokenPrice;

const Collections = () => {
  const [numberOfTokens, setNumberOfTokens] = useState(1);
  const [loading, setLoading] = useState(false);
  const { account } = useEthers();
  const { addToast } = useToasts();
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  const contract = new web3.eth.Contract(MongooseABI, mongooseContractAddress);

  useEffect(() => {
    const loadInitialValues = async () => {
      tokenPrice = await contract.methods.tokenPrice().call();
      console.log(tokenPrice);
    };

    loadInitialValues();
  }, [tokenPrice]);

  const handleMint = async () => {
    setLoading(true);
    await contract.methods
      .safeMint(account, numberOfTokens)
      .send({ from: account, value: parseInt(tokenPrice, 10) * numberOfTokens })
      .then(function (receipt) {
        const tokenID = Array.isArray(receipt.events.MintToken)
          ? receipt.events.MintToken[0].returnValues[0]
          : receipt.events.MintToken.returnValues[0];

        console.log(tokenID);
        addToast('Mint success...', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch(function (error) {
        const { code, message, stack } = error;
        addToast(message, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
    setLoading(false);
    // await safeMint(account, numberOfTokens);
  };

  const plus = () => {
    numberOfTokens < 20 && setNumberOfTokens(numberOfTokens + 1);
  };
  const minus = () => {
    numberOfTokens > 1 && setNumberOfTokens(numberOfTokens - 1);
  };
  const setMaxCount = () => {
    setNumberOfTokens(20);
  };

  return (
    <section className='collections' id='our-collections'>
      <Container className='collections-container'>
        <Row>
          <FlipClock />
          <Col sm='12' md='12'>
            <div className='collections-body d-flex justify-content-between counter-wrapper'>
              <div className='d-flex count-btn-wrap'>
                <Button
                  size='lg'
                  className={
                    numberOfTokens > 0
                      ? 'enabled btn-collect text-uppercase'
                      : 'disabled btn-collect text-uppercase'
                  }
                  onClick={minus}
                >
                  -
                </Button>
                <span>{numberOfTokens}</span>
                <Button
                  size='lg'
                  className={
                    numberOfTokens < 20
                      ? 'enabled btn-collect text-uppercase'
                      : 'disabled btn-collect text-uppercase'
                  }
                  onClick={plus}
                >
                  +
                </Button>
              </div>

              <div className='d-flex'>
                <Button
                  size='lg'
                  className='btn-collect text-capitalize'
                  onClick={setMaxCount}
                >
                  Get Max
                </Button>
              </div>
            </div>

            <div className='collections-body d-flex justify-content-center computd-wrap'>
              <p>
                Total{' '}
                {tokenPrice &&
                  (numberOfTokens * parseInt(tokenPrice, 10)) / 10 ** 18}
                ETH
              </p>
            </div>
          </Col>
          <Col sm='12' md='12'>
            <div className='collections-header text-center'>
              <h3>get your</h3>
              <h2>mongooses</h2>
            </div>
          </Col>

          <Col sm='12' md='12'>
            <div className='collections-header text-center'>
              <h5>Total Mongooses to Mint</h5>
            </div>
          </Col>

          <div className='collections-body text-center'>
            <div className='collections-body'>
              {loading ? (
                <p>Waiting for transaction to complete...</p>
              ) : (
                <Button
                  size='lg'
                  className='btn-collect text-uppercase'
                  onClick={handleMint}
                >
                  Mint Mongooses
                </Button>
              )}
            </div>
            <div className='collections-body mak-top-img d-flex justify-content-center'>
              <div
                size='lg'
                className='btn-collect text-uppercase  h-300 col-md-6'
              >
                <div className='d-flex justify-content-between'>
                  <p> Avaliable </p>
                  <p>Total</p>
                </div>
                <div>
                  <ProgressBar>
                    <ProgressBar striped variant='success' now={50} key={1} />
                    <ProgressBar variant='warning' now={50} key={2} />
                  </ProgressBar>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>0</span>
                  <span>8,888 </span>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Collections;
