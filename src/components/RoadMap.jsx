import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './RoadMap.scss';

const RoadMap = () => {
	return (
		<section className="road-map" id="road-map">
			<Container>
				<Row>
					<Col sm="12" md="12">
						<div className="road-map-header text-center">
							<h3>check our</h3>
							<h2>road map</h2>
							<p className="text-center">How we're going to save the mongooses from extinction</p>
						</div>
						<div className="road-map-body">
							<ul className="list">
								<li className="list-item">
									<div className="item-header">10% SALES</div>
									<div className="item-content">
										<p>
											We will pick 10 random Mighty Mongooses (MME) NFT owners and ship them their
											prints. (Raffle will be live for fair distribution)
										</p>
										<Image src="./images/10-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">20% SALES</div>
									<div className="item-content">
										<p>
										2.5% of all primary sales will be equally spitted & donated 
										between the Breast Cancer Society of Canada & poly garden orphanage of India. 
										</p>
										<p>
											Giveaway of 10 permanently treated 5" displays, framed in modern acrylic
											from Infinite Objects which will contain a video loop of mighty mongooses
											collection or Owners NFT, depending on the request. Must hold at least 1 MME
											NFT at the time of raffle to participate & the raffle will be live for fair
											distribution
										</p>
										<Image src="./images/20-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">30% SALES</div>
									<div className="item-content">
										<p>
											The NFT Lovers club will open, time to collect crypto art!. 2.5% of all
											primary sales to be allocated to the Fund.
										</p>
										<p>
											We will pick 5 random MME NFT holders and will give away 1000$ USD for Each
											person. Must hold at least 2 MME NFTs at the time of raffle to participate &
											raffle will be live for fair distribution
										</p>
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">40% SALES</div>
									<div className="item-content">
										<p> 2.5% of all primary sales will be donated to Sick Kids Canada.</p>
										<p>
											Launch of merch store exclusively for Mighty Mongooses NFT owners – show off
											your Mighty Mongooses to the world in bags, t-shirts, iPhone covers, toddler
											dresses, caps, cups, and more
										</p>
										<Image src="./images/40-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">50% SALES</div>
									<div className="item-content">
										<p>
											$15,000 USD to share between 10 owners ($1500 ETH each) who hold at least 3
											MME (Male or Female) NFT’s. Must hold at least 3 MME NFTs at the time of
											raffle to participate. Registration is required with proof. Live Event for
											fair distribution
										</p>
										<p>We are going to use 5 ETH to raise the floor price of MME on OpenSea.</p>
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">60% SALES</div>
									<div className="item-content">
										<p>
											1.5 % of all primary sales will be used to support Foodoyes. A striving group
											of developers who want to bring change in the social media/food industry
										</p>
										<p>
											20 x Apple Airpods pro raffle to MME NFT holders (Here starts the real fun).
											Must hold at least 2 MME NFTs at the time of raffle to participate.
											Registration is required with proof. Live Event for fair distribution
										</p>
										<Image src="./images/70-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">70% SALES</div>
									<div className="item-content">
										<p>
											We will purchase land in the Sandbox and build the Falling Kingdom. Art
											needs to be seen in the Metaverse!
										</p>
										<p>
											30 MME NFT Airdrop between MME NFT holders. Must hold at least 2 MME NFTs at
											the time of raffle to participate. Registration is required with proof. Live
											Event for fair distribution
										</p>
										<Image src="./images/60-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">80% SALES</div>
									<div className="item-content">
										<p>
											10 x Apple iPhone 13 (Color-chosen based on availability) – 128 GB raffle
											between MME NFT holders. Must hold at least 3 MME NFTs at the time of raffle
											to participate. Registration is required with proof. Live Event for fair
											distribution
										</p>
										<Image src="./images/80-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">90% SALES</div>
									<div className="item-content">
										<p>
											We will activate the 5 rarest Villian Edition on our website/opensea for
											bidding. These editions will be the Artist’s favorite.
										</p>
										<p>
											1 x Tesla Model 3 (standard range) giveaway or equivalent amount in ETH to
											one of our lucky (MME) NFT holders who hold at least 4 MME NFT at the time
											of draw or we will listen to our community & follow the most recommended
											suggestion. Registration & proof required. Live Event for fair distribution
										</p>
										<Image src="./images/90-sale.png" />
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">SOLD OUT</div>
									<div className="item-content">
										<p>
											Arts collected under NFT Art Club will be revealed and we will be giving 5 of
											the items as a giveaway to our MME NFT holders. Must hold at least 4 MME NFT
											at the time of draw.
										</p>
										<p>
											All the holders with a male & female Mongoose are eligible to breed baby
											mongooses.
										</p>
										<p>
										Our mobile app development will begin which will be a home for all our members 
										to check the nearest restaurants, explore food-related articles, NFT news & mighty 
										mongooses latest updates.
										</p>
									</div>
								</li>
								<li className="list-item">
									<div className="item-header">SOLD OUT</div>
									<div className="item-content">
										<p> Metaverse developments and integration.</p>
										<p> Collabs with other projects and brands.</p>
										<p> More to be announced laters.</p>
									</div>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default RoadMap;
