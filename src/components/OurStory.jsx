import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OurStory.scss';

const OurStory = () => {
	return (
		<section className="our-story" id="story">
			<Container>
				<Row>
					<Col sm="12" md="12">
						<div className="our-story-header text-center">
							<h2>introduction</h2>
							<h3>our story</h3>
						</div>

						<div className="our-story-body">
							<p>
							The story happens in an unknown galaxy called “Ether Galaxy” where there is no trace of 
							human civilization but few unique civilizations with alien species organized in their own 
							unique ways. Over the cosmic year, these alien species mutated, and only the strongest 
							survived. Among one of the mutated species was “Mighty Mongooses”. Their kingdom is 
							comprised of 8,888 Mighty Mongooses, living somewhere deep inside an unknown forest. 
							They deeply loved their Kingdom because it was all about togetherness and harmony. 
							Every male & female mongoose is unique in its way in terms of its strengths and appearance. 
							They loved each other and lived happily in their kingdom without any fear. They often held 
							musical evenings, sang together, danced together. 
							</p>
							<br />
							<p>
							Everything was going great until 5 mythical enemies (villains) threatened to attack their 
							kingdom for the 100 years old precious Mongoose EGGS, about to hatch soon! The eggs are 
							guarded in a secret chamber and the chamber needs a unique key to open, which is none other 
							than Mongooses themselves. If the enemies get their hands on the eggs, that would make the 
							next generation baby mongooses to vanish from Ether Galaxy. The Kingdom is under the threat 
							of extinction & they are calling for our help.{' '}
							</p>
							<br />
							<p>
							As a team, all the 4,444 male & 4,444 female Mongooses took an oath, no matter whatever happens 
							they will fight for the falling kingdom and save their eggs from the enemies. They are determined 
							to save their kingdom & eggs so that their mighty baby Mongooses will have a safer future.
							</p>
							<br />
							<p>
							The kingdom is ready for a war and all the mongooses are armed. Now we need your help to adopt 
							these Mongoose families and save their babies from enemies, thus save their kingdom. Let's join 
							the team and do this together. Together we unite, we conquer the world. Let’s help their family 
							to hatch some of the cutest baby Mongooses, so that everyone can live happily ever after. The only 
							outcome that's certain is that kingdom will not fall. Lets’ join together for war and choose your side wisely!
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default OurStory;
