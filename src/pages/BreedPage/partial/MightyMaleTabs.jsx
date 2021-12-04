import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Web3 from "web3";
import axios from "axios";
import MongooseABI from "../../../abi/MightyMongoose.json";
import { mongooseContractAddress } from "../../../contracts";

const MightyMaleTabs = () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contract = new web3.eth.Contract(MongooseABI, mongooseContractAddress);

  const [loading, setLoading] = useState(false);
  const [hasNFT, setHasNFT] = useState(true);
  const [maleImages, setMaleImages] = useState([]);

  const loadImages = async () => {
    var tempMaleIds = [];
    var tempMaleImages = [];
    const accounts = await web3.eth.getAccounts();
    setLoading(true);
    const userAllTokens = await contract.methods
      .userAllTokens(accounts[0])
      .call();
    userAllTokens?.forEach((token) => {
      token % 2 === 0 && tempMaleIds.push(token);
    });
    if (tempMaleIds.length === 0) {
      setHasNFT(false);
    } else {
      const baseURI = await contract.methods.baseURI().call();

      const loadImage = async (id) => {
        const nftStore = await contract.methods.nftStore(id).call();
        if (parseInt(nftStore.motherId, 10) === 0) {
          const response = await axios.get("" + baseURI + id + ".json");
          tempMaleImages.push(
            response.data.image.replace("ipfs://", "https://ipfs.io/ipfs/")
          );
        }
      };

      for (var i = 0; i < tempMaleIds.length; i++)
        await loadImage(tempMaleIds[i]);

      setHasNFT(true);
      setMaleImages(tempMaleImages);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <section className='images'>
      <Row style={{ overflowX: "auto", flexWrap: "nowrap" }}>
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
            You don't have any NFTs
          </div>
        ) : (
          maleImages?.map((image) => {
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

export default MightyMaleTabs;
