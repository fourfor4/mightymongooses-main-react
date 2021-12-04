import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
	return (
        <>
		<footer className="footer">
			<Container>
				<Row>
					<Col sm="12" md="12">
						<div className="footer-header text-center">
							<h2>the rarest</h2>
							<h3>villains</h3>
						</div>
						<div className="footer-body text-center">
							<p> 
							Not much is known about these villains at this time. It is up to us to find out 
							their story and uncover their secrets. <br />
							For now, we just know about The Villains are on their way. They have unique traits 
							and stand out completely from the mongooses. <br /> Let's wait for their reveal. 
							By acquiring one of these villains, you will be eligible to join a special group of 
							villains and take part in community voting.
							</p>

							<br />

							<h4>GET READY TO FIND 5 OF THE RAREST VILLAINS</h4>

							<Row className="justify-content-center">
								<Col sm="12" md="5">
									<div className="foo">
										<div className="foo-icon">
											<Image src="./images/light.png" />
										</div>
										<div className="foo-body text-start">
											<h5>
												Unique art with the <br />
												greatest rarity
											</h5>
										</div>
									</div>
								</Col>
								<Col sm="12" md="5">
									<div className="foo">
										<div className="foo-icon">
											<Image src="./images/light.png" />
										</div>
										<div className="foo-body text-start">
											<h5>
												VIP access to a special <br />
												chat in Discord
											</h5>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
			<div className="copyright">
				<Container>
					<Row>
						<Col sm="12" md="6" lg="8">
							<div className="copyright-layout">
								<div className="copyright-icon">
									<Image src="./images/copyright.png" />
								</div>
                                    <div className="copyright-content">
                                        <h6>© Mighty mongooses. 2021, All rights reserved , </h6>
                                        <h6>Contact information - contact@mightymongooses.com</h6>
                                    </div>
							</div>


                            


						</Col>
                        <Col sm="12" md="6" lg="4" className="developed-by">
                            <p>Developed by - Team Mongooses</p>
							<ul className="social">
							<li className="social-item">
								<a href="https://twitter.com/mightymongooses" target="_blank" rel="noreferrer" className="social-link">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li className="social-item">
								<a
									href="https://www.instagram.com/mightymongooses/"
									className="social-link"
									target="_blank" rel="noreferrer"
								>
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li className="social-item">
								<a href="https://discord.gg/wJJMaDEKQF" target="_blank" rel="noreferrer" className="social-link">
									<Image src="./images/discord.png" alt="discord" />
								</a>
							</li>
							<li className="social-item">
								<a href="https://opensea.io/" target="_blank" rel="noreferrer" className="social-link">
									<Image src="./images/opensea.png" alt="opensea" />
								</a>
							</li>
							<li className="social-item">
								<a href="https://etherscan.io/" className="social-link" rel="noreferrer" target="_blank">
									<Image src="./images/ether-scan.png" alt="ether-scan" />
								</a>
							</li>
						</ul>
                        </Col>
					</Row>
				</Container>
			</div>
            </>
	);
};

export default Footer;
