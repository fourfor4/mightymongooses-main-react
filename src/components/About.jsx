import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.scss';

const About = () => {
	return (
		<section className="about" id="about">
			<Container>
				<Row>
					<Col sm="12" md="12" lg="8">
						<div className="about-caption">
							<Image src="./images/content-head.png" alt="" />
						</div>
						<div className="about-content">
							<p>
								Mighty Mongooses NFT (MME) project was inspired by the Bored Ape Yacht Club. Bored Apes
								Project created a big wave in the NFT world and we look to follow in their footsteps.
								Mighty Mongooses club is a community who strongly believes in a bright crypto future.
								Passion for NFTs connected our international team from Canada, Australia & Asia and
								resulted in the creation of 8,888 Mighty Mongooses.{' '}
							</p>
							<p>
								Mighty Mongooses are a collection of unique 4,444 Male Mongooses and 4,444 Female
								Mongooses NFTs living on the Ethereum blockchain as ERC-721 tokens with an initial
								purchasing cost of 0.07 ETH. Each Mongoose is unique and programmatically generated from
								over 285 possible handcrafted attributes, including skin, clothing, facial expressions,
								hand objects, and more. 
							</p>
						</div>
					</Col>
					<Col sm="12" md="12" lg="4">
						<Image className="about-left-image" fluid src="./images/image-right.png" alt="" />
					</Col>
				</Row>
				<Row>
					<Col sm="12" md="12">
						<div className="about-content">
							<p>
								One of the coolest feature that we introduced in this project is the “Breeding” concept
								where users will be able to collect & breed baby Mongooses. Our team thinks NFT
								shouldn't stop on a .png file instead it should be like a brand and that's why we are
								expanding into the concept of merchandise (shirts, cups, caps, phone cases with logos &
								much more on the way). Later to the success, our project will have a mobile app for the
								community members to meet & greet, check nearest attractions & restaurants, teams
								upcoming projects, news about crypto & a custom user account panel to view our NFT's &
								their traits. The app will give access to our concept games where all the holders can
								play for FREEEE! Besides that, we are working hard to bring this project as soon as
								possible to the NFT space.
							</p>
							<p>
								<p>
									Our roadmap has several milestones but the biggest ones are waiting near to the
									sold-out. Check out our roadmap for the biggest give-away to our community and you
									don’t want to miss those! Our team believes in a bright crypto future and we think
									Mighty Mongooses is just a beginning and we would love you to stick around for the
									ride.
								</p>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
