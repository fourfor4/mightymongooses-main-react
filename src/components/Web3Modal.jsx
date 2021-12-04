import React from 'react';
import { ReactComponent as MetamaskLogo } from './images/metamask.svg';

const Web3Modal = ({ setShowWeb3Modal, handleConnectWallet }) => {
  const handleCloseModal = () => {
    setShowWeb3Modal(false);
  };
  return (
    <div id='WEB3_CONNECT_MODAL_ID'>
      <div className='web3modal-lightbox'>
        <div className='web3modal-container'>
          <div className='web3modal-card'>
            <div
              className='web3modal-close-button'
              onClick={handleCloseModal}
            ></div>
            <div className='web3modal-provider-wrapper'>
              <div
                className='web3modal-provider-container'
                onClick={handleConnectWallet}
              >
                <div className='web3modal-provider-icon'>
                  <MetamaskLogo />
                </div>
                <div className='web3modal-provider-name'>MetaMask</div>
                <div className='web3modal-provider-description'>
                  Connect to your MetaMask Wallet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Modal;
