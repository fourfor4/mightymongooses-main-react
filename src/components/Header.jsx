import React, { useState, useRef, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import Web3Modal from "web3modal";
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import './Header.scss';
import connect, {provider, disconnectWallet} from './walletConnect/connect';
import web3 from 'web3';

import { useDurationToGetation } from '../hooks';

const Header = ({
  account,
  setShowMintPage,
  handleShowWeb3Modal,
  handleDeactivateAccount,
}) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 1199px)').matches
  );

  const [address, setAddress] = useState(account);

  const ref = useRef();
  const toggleRef = useRef();
  const { addToast } = useToasts();

  const DurationToGestation = useDurationToGetation();

  useEffect(() => {
    const header = ref.current;
    const scrollcallback = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollcallback);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    const mql = window.matchMedia('(max-width: 1199px)');
    mql.addEventListener('change', handler);
  }, []);

  const handleNavigate = () => {
    if (matches) {
      toggleRef.current.click();
      ref.current.classList.add('support-header');
      setTimeout(() => {
        ref.current.classList.remove('header-bg');
      }, 20);
    } else {
      ref.current.classList.remove('support-header');
    }
  };

  const handleToggle = () => {
    if (matches) {
      ref.current.classList.add('header-bg');
    } else {
      ref.current.classList.remove('header-bg');
    }
  };

  const handleShow = () => {
    if (address) {
      handleNavigate();
    } else {
      addToast('Metamask not connected', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const walletInfo = async() => {
    try {
      const web3 = await connect();

      //get address Details 

      await web3.eth.getAccounts((err, address) => {
        if(address) {
          console.log(address[0]);
          setAddress(address[0]);
          setShowMintPage(true);
        } else {
          console.log(err);
        }
      })

      //get Network Id Details 

      await web3.eth.getChainId((err, chainId) => {
        if(chainId) {
          console.log(chainId);
        } else {
          console.log(err);
        }
      })

    } catch (err) {
      console.log(err);
    }
  }

   const disconnectWallet = async (provider) => {
      try {
        await provider.close();
        const web3Modal = new Web3Modal({ cacheProvider: true });
        web3Modal.clearCachedProvider();
        setShowMintPage(false);
        setAddress(false);
      } catch (err) {
        
        const web3Modal = new Web3Modal({ cacheProvider: true });
        web3Modal.clearCachedProvider();
        setShowMintPage(false);
        setAddress(false);
        //handleDeactivateAccount();
      }
      
    }


  return (
    <header className={!matches ? 'header' : 'header support-header'} ref={ref}>
      {address && (
        <div className='bg-light d-flex justify-content-end align-items-center px-5 gap-5'>
          {address && ` My Address: ${address}`}{' '}
          {DurationToGestation && `Duration: ${DurationToGestation.toString()}`}
          <Button onClick={() => disconnectWallet(provider)}>Disconnet</Button>
        </div>
      )}
      <Navbar expand='xl'>
        <Container>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={handleToggle}
            ref={toggleRef}
          />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link onClick={handleNavigate} href='#about'>
                About
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#mongoonomics'>
                Mongoonomics
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#the-team'>
                Team
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#story'>
                Story
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#our-collections'>
                Collections
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#road-map'>
                Road Map
              </Nav.Link>
              <Nav.Link onClick={handleShow} href={address ? '/breeding' : '#'}>
                Breeding
              </Nav.Link>
              <Nav.Link onClick={handleNavigate} href='#faq'>
                Faq
              </Nav.Link>
            </Nav>
            <ul className='social ms-auto'>
              <li className='social-item'>
                <a
                  href='https://twitter.com/mightymongooses'
                  target='_blank'
                  rel='noreferrer'
                  className='social-link'
                >
                  <i className='fab fa-twitter' />
                </a>
              </li>
              <li className='social-item'>
                <a
                  href='https://www.instagram.com/mightymongooses/'
                  rel='noreferrer'
                  className='social-link'
                  target='_blank'
                >
                  <i className='fab fa-instagram' />
                </a>
              </li>
              <li className='social-item'>
                <a
                  href='https://discord.gg/wJJMaDEKQF'
                  target='_blank'
                  rel='noreferrer'
                  className='social-link'
                >
                  <Image src='./images/discord.png' alt='discord' />
                </a>
              </li>
              <li className='social-item'>
                <a
                  href='https://opensea.io/'
                  target='_blank'
                  className='social-link'
                  rel='noreferrer'
                >
                  <Image src='./images/opensea.png' alt='opensea' />
                </a>
              </li>
              <li className='social-item'>
                <a
                  href='https://etherscan.io/'
                  className='social-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image src='./images/ether-scan.png' alt='ether-scan' />
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
          {!address && (
            <Button className='btn-connect' onClick={ () => walletInfo()}>
              Connect to MetaMask
            </Button>
          )}
          {address && (
            <Button className='btn-connect' onClick={setShowMintPage}>
              Mint Mongooses
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
