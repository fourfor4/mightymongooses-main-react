import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Web3 from "web3";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useChildPrice, useDurationToGetation } from "../../../hooks";
import { BreedContext } from "../BreedContext";
import MongooseABI from "../../../abi/MightyMongoose.json";
import { mongooseContractAddress } from "../../../contracts";

const MightyBabiesTabs = () => {
  const { addToast } = useToasts();
  const { account, breeding, setBreeding } = useContext(BreedContext);

  const [tokenImage, setTokenImage] = useState();
  const [childImages, setChildImages] = useState([]);
  const [loading, setLoading] = useState();
  const [hasNFT, setHasNFT] = useState();
  const [giveBirth, setGiveBirth] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const storageItem = JSON.parse(localStorage.getItem(account));
  const femaleId = storageItem?.femaleId;
  const maleId = storageItem?.maleId;

  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contract = new web3.eth.Contract(MongooseABI, mongooseContractAddress);
  const childPrice = useChildPrice();

  useEffect(() => {
    const fetchDuration = async () => {
      const DurationToGestation = await contract.methods
        .DurationToGestation()
        .call();

      const timer =
        parseInt(storageItem?.gestationTime, 10) +
        parseInt(DurationToGestation, 10) -
        parseInt(new Date().getTime() / 1000, 10);

      setSeconds(timer);
    };

    // if (breeding) {
    fetchDuration();
    // }
  }, [localStorage.getItem(account)]);

  useEffect(() => {
    const gestationInterval = setInterval(() => {
      setSeconds((second) => second - 1);
    }, 1000);

    return () => clearInterval(gestationInterval);
  }, [breeding]);

  const loadImageData = async () => {
    const tempImages = [];
    setLoading(true);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const userAllTokens = await contract.methods.userAllTokens(account).call();

    if (userAllTokens.length === 0) {
      setHasNFT(false);
    } else {
      setHasNFT(true);
      const baseURI = await contract.methods.baseURI().call();

      const loadImage = async (id) => {
        const nftStore = await contract.methods.nftStore(id).call();

        if (parseInt(nftStore.motherId, 10) !== 0) {
          const response = await axios.get("" + baseURI + id + ".json");
          tempImages.push(
            response.data.image.replace("ipfs://", "https://ipfs.io/ipfs/")
          );
        }
      };

      for (var i = 0; i < userAllTokens.length; i++) {
        await loadImage(userAllTokens[i]);
      }

      setChildImages(tempImages);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadImageData();
  }, [tokenImage]);

  const handleGiveBirth = async () => {
    if (maleId && femaleId && storageItem?.breed) {
      const accounts = await web3.eth.getAccounts();
      setGiveBirth(true);
      // Check the breeding time from smart contract
      await contract.methods
        .giveBirth(maleId, femaleId)
        .send({ from: accounts[0], value: parseInt(childPrice, 10) })
        .then(async (receipt) => {
          console.log(receipt);
          const tokenID = receipt.events.MintToken.returnValues[0];
          const baseURI = await contract.methods.baseURI().call();
          const response = await axios.get("" + baseURI + tokenID + ".json");
          const childImage = response.data.image.replace(
            "ipfs://",
            "https://ipfs.io/ipfs/"
          );

          setTokenImage(childImage);

          addToast(tokenID + " Baby borned...", {
            appearance: "success",
            autoDismiss: true,
          });
          setBreeding(false);
          setGiveBirth(false);

          localStorage.removeItem(accounts[0]);
        })
        .catch(function (error) {
          const { message } = error;
          setGiveBirth(false);

          addToast(message, {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
  };

  return (
    <section className='images'>
      <Row style={{ overflowX: "auto", flexWrap: "nowrap" }}>
        <Col sm='12' md='6' lg='3'>
          {storageItem?.breed ? (
            seconds < 0 ? (
              giveBirth ? (
                <div
                  className='image-block'
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      fontSize: "18px",
                      paddingTop: "20px",
                      paddingLeft: "10px",
                      color: "white",
                      fontWeight: "bold",
                      zIndex: "100",
                    }}
                  >
                    Please wait... Giving birth
                  </div>
                  <Image fluid src={"./images/baby-final.gif"} alt='' />
                </div>
              ) : (
                <div
                  className='image-block'
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={handleGiveBirth}
                >
                  <div
                    style={{
                      position: "absolute",
                      fontSize: "18px",
                      paddingTop: "20px",
                      paddingLeft: "10px",
                      color: "white",
                      fontWeight: "bold",
                      zIndex: "100",
                    }}
                  >
                    Click here to reveal the baby
                  </div>
                  <Image fluid src={"./images/baby-final.gif"} alt='' />
                </div>
              )
            ) : (
              <>
                <div
                  style={{
                    position: "absolute",
                    fontSize: "18px",
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    color: "white",
                    fontWeight: "bold",
                    zIndex: "100",
                  }}
                >
                  Gestation Time: <br />
                  {seconds}
                </div>
                {seconds < 10 ? (
                  <Image fluid src={"./images/baby-final.gif"} alt='' />
                ) : (
                  <Image fluid src={"./images/baby.gif"} alt='' />
                )}
              </>
            )
          ) : (
            <div style={{ position: "relative", cursor: "pointer" }}></div>
          )}
        </Col>
        {loading ? (
          <div
            style={{ fontSize: "22px", textAlign: "center", padding: "20px 0" }}
          >
            Please wait for NFTs to load from IPFS
          </div>
        ) : !hasNFT ? (
          <div
            style={{ fontSize: "22px", textAlign: "center", padding: "20px 0" }}
          >
            You don't have any baby NFTs
          </div>
        ) : (
          childImages?.map((image) => {
            return (
              <Col key={image} sm='12' md='6' lg='3' className='mb-2'>
                <div className='image-block'>
                  <LazyLoadImage effect='blur' src={image} />
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </section>
  );
};

export default MightyBabiesTabs;
