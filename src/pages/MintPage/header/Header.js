import React, { useState, useRef, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Image, Modal } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
	const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 1199px)').matches);
	const [show, setShow] = useState(false);
	const ref = useRef();
	const toggleRef = useRef();

	useEffect(() => {
		const header = ref.current;
		// const sticky = header.offsetTop;
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

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
		handleNavigate();
	};

	return (
		<header className={!matches ? 'header' : 'header support-header'} ref={ref}>
			<Navbar expand="xl">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} ref={toggleRef} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={handleNavigate} href="#about">
								About
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#mongoonomics">
								Mongoonomics
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#the-team">
								Team
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#story">
								Story
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#our-collections">
								Collections
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#road-map">
								Road Map
							</Nav.Link>
							<Nav.Link onClick={handleShow} href="#">
								Breeding
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#faq">
								Faq
							</Nav.Link>
						</Nav>
						<ul className="social ms-auto">
							<li className="social-item">
								<a
									href="https://twitter.com/mightymongooses"
									target="_blank"
									rel="noreferrer"
									className="social-link"
								>
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li className="social-item">
								<a
									href="https://www.instagram.com/mightymongooses/"
									rel="noreferrer"
									className="social-link"
									target="_blank"
								>
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li className="social-item">
								<a
									href="https://discord.gg/wJJMaDEKQF"
									target="_blank"
									rel="noreferrer"
									className="social-link"
								>
									<Image src="./images/discord.png" alt="discord" />
								</a>
							</li>
							<li className="social-item">
								<a href="https://opensea.io/" target="_blank" className="social-link" rel="noreferrer">
									<Image src="./images/opensea.png" alt="opensea" />
								</a>
							</li>
							<li className="social-item">
								<a
									href="https://etherscan.io/"
									className="social-link"
									target="_blank"
									rel="noreferrer"
								>
									<Image src="./images/ether-scan.png" alt="ether-scan" />
								</a>
							</li>
						</ul>
					</Navbar.Collapse>
					<Button className="btn-connect">Connect to MetaMask</Button>
				</Container>
			</Navbar>

			{/* Modal Popup */}
			<Modal show={show} centered size="md" onHide={handleClose}>
				<Modal.Header className="pt-3 pb-0 border-0" closeButton>
					{/* <Modal.Title className="text-uppercase"></Modal.Title> */}
				</Modal.Header>
				<Modal.Body className="text-center">
					<h2 className="heading text-uppercase">Breeding page Under construction</h2>
					<h3 className="sub-heading">Our team is working hard to bring this page as soon as possible</h3>
					<Image fluid src="./images/under-construction.jpg" alt="construction" />
				</Modal.Body>
			</Modal>
		</header>
	);
};

export default Header;
