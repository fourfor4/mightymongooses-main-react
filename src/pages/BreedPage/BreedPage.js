import React, { useState } from "react";
import { BreedContext } from "./BreedContext";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useEthers } from "@usedapp/core";
import Header from "./partial/Header";
import MightyTabs from "./partial/MightyTabs";
import Mongooses from "./partial/Mongooses";
import GettingStarted from "./partial/GettingStarted";
import Buying from "./partial/Buying";
import Restrictions from "./partial/Restrictions";
import Faq from "./partial/Faq";
import Footer from "./partial/Footer";
// import './BreedPage.scss';

const BreedPage = () => {
  const [femaleIds, setFemaleIds] = useState([]);
  const [maleIds, setMaleIds] = useState([]);
  const [femaleImages, setFemaleImages] = useState([]);
  const [maleImages, setMaleImages] = useState([]);
  const [maleId, setMaleId] = useState();
  const [femaleId, setFemaleId] = useState();
  const [breeding, setBreeding] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const history = useHistory();
  const { addToast } = useToasts();
  const { account, deactivate } = useEthers();
  // const etherBalance = useEtherBalance(account);

  const handleCopyAddress = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(account);
    addToast("Metamask address copied", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleDisconnect = (e) => {
    deactivate();
    history.push("/");
  };
  return (
    <BreedContext.Provider
      value={{
        account,
        femaleIds,
        maleIds,
        femaleImages,
        maleImages,
        maleId,
        femaleId,
        breeding,
        seconds,
        setFemaleIds,
        setMaleIds,
        setFemaleImages,
        setMaleImages,
        setMaleId,
        setFemaleId,
        setBreeding,
        setSeconds,
      }}
    >
      <div className='mongoose-app'>
        <Header
          handleCopyAddress={handleCopyAddress}
          handleDisconnect={handleDisconnect}
        />
        <main>
          <MightyTabs />
          <Mongooses />
          <GettingStarted />
          <Buying />
          <Restrictions />
          <Faq />
        </main>
        <Footer />
      </div>
    </BreedContext.Provider>
  );
};

export default BreedPage;
