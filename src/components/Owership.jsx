import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Owership.scss';

const Owership = () => {
	return (
		<div className="owership-layout">
			<section className="owership">
				<Container>
					<Row>
						<Col sm="12" md="12" className="text-center">
							<div className="owership-header">
								<h2>ownership</h2>
								<h3>details</h3>
							</div>
							<div className="owership-body">
								<p>
								2.5% Royalty fee will be collected for every secondary sale from the secondary market. 
								Make your Mighty Mongooses (MME) NFT a real warrior and they will make you ETH. Each 
								token grants rights to the art for you to create something with your MME NFT if you wish to do so.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="team" id="the-team">
				<Container>
					<div className="team-header text-center">
						<h3>meet</h3>
						<h2>the team</h2>
					</div>
					<div className="team-body">
						<Row>
							<Col sm="12" md="8">
								<Row>
									<Col sm="12" md="4">
										<div className="team-item">
											<Image src="./images/1.png" fluid />
											<div className="team-item-body">
												<h5 className="title">
													Mongoo <span className="secondary">Stan</span>
												</h5>
												<h6 className="subtitle">CEO/Development</h6>
											</div>
										</div>
									</Col>
									<Col sm="12" md="4">
										<div className="team-item">
											<Image src="./images/2.png" fluid />
											<div className="team-item-body">
												<h5 className="title">
													Mongoo <span className="secondary">Shin</span>
												</h5>
												<h6 className="subtitle">Artist</h6>
											</div>
										</div>
									</Col>
									<Col sm="12" md="4">
										<div className="team-item">
											<Image src="./images/3.png" fluid />
											<div className="team-item-body">
												<h5 className="title">
													Mongoo <span className="secondary">Ryan</span>
												</h5>
												<h6 className="subtitle">Marketing/Social Media</h6>
											</div>
										</div>
									</Col>
									<Col sm="12" md="4">
										<div className="team-item">
											<Image src="./images/4.png" fluid />
											<div className="team-item-body">
												<h5 className="title">
													Mongoo <span className="secondary">Dran</span>
												</h5>
												<h6 className="subtitle">QA/Community</h6>
											</div>
										</div>
									</Col>
									<Col sm="12" md="4">
										<div className="team-item">
											<Image src="./images/5.png" fluid />
											<div className="team-item-body">
												<h5 className="title">
													Mongoo <span className="secondary">Krish</span>
												</h5>
												<h6 className="subtitle">Design/Artist/ Full Stack Developer</h6>
											</div>
										</div>
									</Col>
									<Col className="bottom-header-layout">
										<div className="bottom-header">
											<h3>
												Mighty <br /> Mongooses
											</h3>
										</div>
									</Col>
								</Row>
							</Col>

							<Col sm="12" md="4" />
						</Row>
					</div>
				</Container>
			</section>
			<Container>
				<Row>
					<Col sm="12">
						<p>
						We are a team of experts and crypto enthusiasts who want to make some splashes in the NFT world. 
						The whole collection of Mongooses is a combined effort from Artist Shin & Designer Krish. Shin 
						made all his signature hand-drawn characters & gave them life using Procreate while Krish 
						transferred all the hand drawn art into Adobe Illustrator. Mighty Mongooses aims to bring some 
						uniqueness to NFTs by bringing the 5 different postures of characters, which we believe are very 
						much missing in this NFT space. Our team is fully passionate and committed to the NFT space and 
						we strongly believe this is our future and our project can help make a difference in the NFT world. 
						We hope you’ll follow along on this journey with us.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Owership;
