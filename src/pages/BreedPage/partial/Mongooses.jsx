import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Modal, Image } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { FaPlus } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Web3 from "web3";
import axios from "axios";
import MongooseABI from "../../../abi/MightyMongoose.json";
import { mongooseContractAddress } from "../../../contracts";
import { BreedContext } from "../BreedContext";
import "./Mongooses.scss";

const Mongooses = () => {
  const {
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
  } = useContext(BreedContext);

  const [maleShow, setMaleShow] = useState(false);
  const [femaleShow, setFemaleShow] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [breedModal, setBreedModal] = useState(false);
  const [breedText, setBreedText] = useState(false);
  const [childMaleImages, setChildMaleImages] = useState([]);
  const [childFemaleImages, setChildFemaleImages] = useState([]);

  const { addToast } = useToasts();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contract = new web3.eth.Contract(MongooseABI, mongooseContractAddress);

  const loadContractData = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const tempFemaleIds = [];
    const tempMaleIds = [];
    const tempFemaleImages = [];
    const tempMaleImages = [];
    const tempChildFemaleImages = [];
    const tempChildMaleImages = [];

    setImageLoading(true);
    const userAllTokens = await contract.methods.userAllTokens(account).call();
    const DurationToGestation = await contract.methods
      .DurationToGestation()
      .call();

    setCountdown(DurationToGestation);
    setSeconds(DurationToGestation);

    userAllTokens?.forEach((token) => {
      token % 2 === 1 ? tempFemaleIds.push(token) : tempMaleIds.push(token);
    });

    const baseURI = await contract.methods.baseURI().call();
    setFemaleIds(tempFemaleIds);
    setMaleIds(tempMaleIds);

    const pushImages = async (id) => {
      const response = await axios.get("" + baseURI + id + ".json");
      const imageUrl = response.data.image.replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      );

      const nftStore = await contract.methods.nftStore(id).call();

      if (
        parseInt(nftStore.motherId, 10) !== 0 ||
        parseInt(nftStore.fatherId, 10) !== 0
      ) {
        id % 2 === 1
          ? tempChildFemaleImages.push(imageUrl)
          : tempChildMaleImages.push(imageUrl);
      }

      id % 2 === 1
        ? tempFemaleImages.push(imageUrl)
        : tempMaleImages.push(imageUrl);
    };

    for (let i = 0; i < tempFemaleIds.length; i++) {
      await pushImages(tempFemaleIds[i]);
    }

    setFemaleImages(tempFemaleImages);

    for (let i = 0; i < tempMaleIds.length; i++) {
      await pushImages(tempMaleIds[i]);
    }

    setMaleImages(tempMaleImages);
    setChildFemaleImages(tempChildFemaleImages);
    setChildMaleImages(tempChildMaleImages);
    setImageLoading(false);
  };

  useEffect(() => {
    loadContractData();
  }, []);

  const handleMaleModalClose = () => {
    setMaleShow(false);
  };

  const handlerMaleModal = () => {
    setMaleShow(true);
  };

  const handleFemaleModalClose = () => {
    setFemaleShow(false);
  };
  const handlerFemaleModal = () => {
    setFemaleShow(true);
  };

  // const { state, send: gestationApprove, event } = useGestationApprove();

  const handleApprove = async () => {
    if (!maleId || !femaleId) {
      setBreedText("Select male/female ID");
      setBreedModal(true);
      return;
    }
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const breedPause = await contract.methods.breedPause().call();

    if (breedPause) {
      setBreedText("Breeding only avalible at 100%");
      setBreedModal(true);
      return;
    }

    const maximumBreedPerUser = await contract.methods
      .maximumBreedPerUser()
      .call();

    const breedStore = await contract.methods.breedStore(account).call();

    if (breedStore.breedCount === maximumBreedPerUser) {
      setBreedText(
        `Breeding is not possible as you already have ${breedStore.breedCount} babies in your wallet`
      );
      setBreedModal(true);
      return;
    }

    const maxBreedLimit = await contract.methods.maxBreedLimit().call();
    const breedCount = await contract.methods.breedCount().call();

    if (maxBreedLimit === breedCount) {
      setBreedText(
        `Breeding is not posile as ${breedCount} number of babies already born and wait for Gen 2.0 release`
      );
      setBreedModal(true);
      return;
    }

    const nftStore1 = await contract.methods.nftStore(maleId).call();
    const nftStore2 = await contract.methods.nftStore(femaleId).call();

    if (
      parseInt(nftStore1.generation, 10) !== parseInt(nftStore2.generation, 10)
    ) {
      setBreedText("Breed is not proceed with their parent");
      setBreedModal(true);
      return;
    }

    setLoading(true);

    await contract.methods
      .gestationApprove(maleId, femaleId)
      .send({ from: account })
      .then(function (receipt) {
        addToast("Breeding started...", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: countdown,
        });

        setBreeding(true);

        const gestationTime = receipt.events.GestationApproved.returnValues[0];

        const accountInfo = {
          maleId: maleId,
          femaleId: femaleId,
          gestationTime: parseInt(gestationTime, 10),
          breed: true,
        };

        localStorage.setItem("" + account, JSON.stringify(accountInfo));
        // localStorage.setItem("maleId", maleId);
        // localStorage.setItem("femaleId", femaleId);
        // localStorage.setItem("gestationTime", parseInt(gestationTime, 10));
        // localStorage.setItem("breed", true);

        // const timer = setInterval(() => {
        //   count += 1;
        //   setSeconds(countdown - count);
        //   if (countdown - count === 0) {
        //     setLoading(false);
        //     setBreeding(false);
        //     clearInterval(timer);
        //   }
        // }, 1000);
        // Countdown DurationToGestation
      })
      .catch(function (error) {
        const { message } = error;
        addToast(message, {
          appearance: "error",
          autoDismiss: true,
        });
        setBreeding(false);
        setLoading(false);
      });
  };

  const handleAddMale = (id) => {
    setMaleId(maleIds[maleImages.indexOf(id)]);
    setMaleShow(false);
  };

  const handleAddFemale = (id) => {
    setFemaleId(femaleIds[femaleImages.indexOf(id)]);
    setFemaleShow(false);
  };

  const handleBreedModal = () => {
    setBreedModal(false);
  };

  return (
    <section className='mongooses'>
      <Container>
        <Row>
          <Col sm='12' md='12' lg='12'>
            <div className='mongooses-header text-center'>
              <h2 className='heading'>let's breed</h2>
              <h3 className='sub-heading'>mongooses</h3>
            </div>
            <div className='mongooses-body'>
              <Row>
                <Col sm='12' md='4' lg='4'>
                  <div
                    className='button-mongo'
                    onClick={loading ? () => {} : handlerMaleModal}
                  >
                    {maleId ? (
                      loading && breeding ? (
                        <>
                          <FaPlus className='icon mb-3' />
                          <h4 className='mb-1'>Lorem ipsum dolor sit amet.</h4>
                          <p className='mb-1'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </>
                      ) : (
                        <Image
                          src={maleImages[maleIds.indexOf(maleId)]}
                          alt=''
                        />
                      )
                    ) : (
                      <>
                        <FaPlus className='icon mb-3' />
                        <h4 className='mb-1'>Lorem ipsum dolor sit amet.</h4>
                        <p className='mb-1'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </>
                    )}
                  </div>
                </Col>
                <Col sm='12' md='4' lg='4'>
                  <div
                    className='button-mongo'
                    onClick={loading ? () => {} : handlerFemaleModal}
                  >
                    {femaleId ? (
                      loading && breeding ? (
                        <>
                          <FaPlus className='icon mb-3' />
                          <h4 className='mb-1'>Lorem ipsum dolor sit amet.</h4>
                          <p className='mb-1'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </>
                      ) : (
                        <Image
                          src={femaleImages[femaleIds.indexOf(femaleId)]}
                          alt=''
                        />
                      )
                    ) : (
                      <>
                        <FaPlus className='icon mb-3' />
                        <h4 className='mb-1'>Lorem ipsum dolor sit amet.</h4>
                        <p className='mb-1'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </>
                    )}
                  </div>
                </Col>

                <Col sm='12' md='4' lg='4'>
                  {loading ? (
                    <div className='button-mongo rounded-circle'>
                      <h4>Gestation proceed...</h4>
                    </div>
                  ) : (
                    <div
                      className='button-mongo rounded-circle'
                      onClick={handleApprove}
                    >
                      <h4 className='mb-1'>CLICK TO</h4>
                      <p className='mb-1'>BREED YOUR BABY</p>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Male Modal Popup */}
      <Modal show={maleShow} centered size='lg' onHide={handleMaleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase'>Male</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <section className='images'>
            <Row>
              {imageLoading ? (
                <div>Please wait for NFT to load from IPFS</div>
              ) : maleImages.length === 0 ? (
                <div
                  style={{
                    fontSize: "22px",
                    textAlign: "center",
                    padding: "20px 0",
                  }}
                >
                  You don't have any NFTs
                </div>
              ) : (
                <>
                  {maleImages?.map((image) => {
                    if (childMaleImages.indexOf(image) < 0)
                      return (
                        <Col
                          sm='12'
                          md='6'
                          lg='3'
                          key={image}
                          className='mb-2'
                          style={{ cursor: "pointer", borderRadius: "10px" }}
                        >
                          <div
                            className='image-block'
                            onClick={(e) => handleAddMale(image)}
                          >
                            <LazyLoadImage effect='blur' src={image} />
                          </div>
                        </Col>
                      );
                  })}
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Child Male
                  </div>
                  {childMaleImages?.map((image) => {
                    return (
                      <Col
                        sm='12'
                        md='6'
                        lg='3'
                        key={image}
                        className='mb-2'
                        style={{ cursor: "pointer", borderRadius: "10px" }}
                      >
                        <div
                          className='image-block'
                          onClick={(e) => {
                            handleAddMale(image);
                          }}
                        >
                          <LazyLoadImage effect='blur' src={image} />
                        </div>
                      </Col>
                    );
                  })}
                </>
              )}
            </Row>
          </section>
        </Modal.Body>
      </Modal>

      {/* Female Modal Popup */}
      <Modal
        show={femaleShow}
        centered
        size='lg'
        onHide={handleFemaleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase'>Female</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <section className='images'>
            <Row>
              {imageLoading ? (
                <div>Please wait for NFT to load from IPFS</div>
              ) : femaleImages.length === 0 ? (
                <div
                  style={{
                    fontSize: "22px",
                    textAlign: "center",
                    padding: "20px 0",
                  }}
                >
                  You don't have any NFTs
                </div>
              ) : (
                <>
                  {femaleImages?.map((image) => {
                    if (childFemaleImages.indexOf(image) < 0)
                      return (
                        <Col
                          sm='12'
                          md='6'
                          lg='3'
                          key={image}
                          className='mb-2'
                          style={{ cursor: "pointer", borderRadius: "10px" }}
                        >
                          <div
                            className='image-block'
                            onClick={(e) => handleAddFemale(image)}
                          >
                            <LazyLoadImage effect='blur' src={image} />
                          </div>
                        </Col>
                      );
                  })}
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Child Female
                  </div>
                  {childFemaleImages?.map((image) => {
                    return (
                      <Col
                        sm='12'
                        md='6'
                        lg='3'
                        key={image}
                        className='mb-2'
                        style={{ cursor: "pointer", borderRadius: "10px" }}
                      >
                        <div
                          className='image-block'
                          onClick={(e) => handleAddFemale(image)}
                        >
                          <LazyLoadImage effect='blur' src={image} />
                        </div>
                      </Col>
                    );
                  })}
                </>
              )}
            </Row>
          </section>
        </Modal.Body>
      </Modal>

      <Modal show={breedModal} centered size='md' onHide={handleBreedModal}>
        <Modal.Header className='pt-3 pb-0 border-0' closeButton>
          {/* <Modal.Title className="text-uppercase"></Modal.Title> */}
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h2 className='heading text-uppercase'>
            Breeding page Under construction
          </h2>
          <h3 className='sub-heading'>{breedText}</h3>
          <Image
            fluid
            src='./images/under-construction.jpg'
            alt='construction'
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Mongooses;
