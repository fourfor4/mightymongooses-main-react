import React, { useState } from 'react';
import { useEthers } from '@usedapp/core';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Mongoonomics from '../../components/Mongoonomics';
import Rarity from '../../components/Rarity';
import Owership from '../../components/Owership';
import Collections from '../../components/Collections';
import RoadMap from '../../components/RoadMap';
import OurStory from '../../components/OurStory';
import Faq from '../../components/Faq';
import Collection from '../MintPage/collections/Collections';
import Footer from '../../components/Footer';
import Web3Modal from '../../components/Web3Modal';
import './Home.scss';

const Home = () => {
  const [showWeb3Modal, setShowWeb3Modal] = useState(false);
  const [showMintPage, setShowMintPage] = useState(false);

  const { activateBrowserWallet, account, deactivate } = useEthers();

  const handleShowWeb3Modal = () => {
    !account && setShowWeb3Modal(true);
  };

  const handleConnectWallet = async () => {
    const result = await activateBrowserWallet();
    setShowWeb3Modal(false);
    try {
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeactivateAccount = () => {
    try {
      deactivate();
      setShowMintPage(false);
      setShowWeb3Modal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header
        account={account}
        setShowMintPage={setShowMintPage}
        handleShowWeb3Modal={handleShowWeb3Modal}
        handleDeactivateAccount={handleDeactivateAccount}
      />
      {showMintPage ? (
        <Collection />
      ) : (
        <main>
          <Banner />
          <About />
          <Mongoonomics />
          <Rarity />
          <Owership />
          <Collections />
          <RoadMap />
          <OurStory />
          <Faq />
        </main>
      )}
      <Footer />
      {showWeb3Modal && (
        <Web3Modal
          handleConnectWallet={handleConnectWallet}
          setShowWeb3Modal={setShowWeb3Modal}
        />
      )}
    </>
  );
};

export default Home;
