import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
	return (
        <>

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
