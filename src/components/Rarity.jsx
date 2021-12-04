import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Rarity.scss';

const Rarity = () => {
	return (
		<section className="rarity">
			<Container className="h-100">
				<Row className="h-100">
					<Col sm="12" md="12" lg="7" className="rarity-left-bg">
						<div className="rarity-left-header text-end">
							<h2>rarity?</h2>
						</div>
						<div className="rarity-content">
							<div className="rarity-image-layout">
								<Image src="/images/megician.png" className="rarity-charactor" />
							</div>
							<div className="rarity-badge-layout">
								<div className="status-text">Stats</div>
								<div className="rarity-badge primary">
									<span className="title">TOTAL MONGOOSES</span> <strong> 8,888</strong>
								</div>
								<div className="rarity-badge secondary">
									<span className="title">MINT COST</span> <strong>0.07</strong>
								</div>
							</div>
						</div>
					</Col>

					<Col sm="12" md="12" lg="5" className="rarity-right-bg">
						<div className="rarity-right-header">
							<h3>Traits</h3>
						</div>
						<div className="rarity-right-body">
							<Row className="align-items-center">
								<Col sm="12" md="6">
									<ul className="rarity-list">
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Background</span>
											<strong>20</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Body type</span>
											<strong>5</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Skin Tone</span>
											<strong>17</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Dress Types</span>
											<strong>33</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Body Accessories</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Hairstyle</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Sunglasses</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Cigarette</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Hats</span>
											<strong>16</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Neck Accessories</span>
											<strong>18</strong>
										</li>
									</ul>
								</Col>
								<Col sm="12" md="6">
									<ul className="rarity-list">
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Mouth</span>
											<strong>16</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Lip colors</span>
											<strong>8</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Eye combination</span>
											<strong>12</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Earrings</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Hand objects</span>
											<strong>35</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Belt</span>
											<strong>5</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Tail</span>
											<strong>18</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Headphone</span>
											<strong>5</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Shoe</span>
											<strong>10</strong>
										</li>
										<li className="rarity-list-item text-uppercase">
											<span className="title me-2">Toes & fingers</span>
											<strong>17</strong>
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Rarity;
