import React from 'react'
import Tabs from '../../components/Tab/Tabs';
import Card from '../../components/IndividualCard/IndividualCard';
import {Link} from 'react-router-dom';
import './style.css'
import {Button} from '../../components/Button/Button';
function Templates() {
	return (
		<>
			<div className = "templates__body">
				<div className = "headingTemplates">
					<h1 style={{fontSize:'48px'}}>Create stunning</h1>
					<h2 style={{fontSize:'36px', marginBottom:'36px'}}>Github Profiles</h2>
					
					<Link to="/DefaultTemplate" className="def">
						<Button buttonStyle = "btn--outline" buttonSize = "btn--wide" buttonColor = "red">Get Started</Button>
					</Link>
				</div>

				<div className = "templates">
					<Tabs>				
						<div label="Simple" className="grid">
							<div className="grid-container">
								<Link to="/simple_1" className="grid-item">
									<Card
										title = "Executive"
										desc = "Executive"
										image_src = "../../images/simple_1.jpg"
										image_alt = "Here"
										/>
								</Link>

								<Link to="/simple_2" className = "grid-item">
									<Card
										title = "Simple"
										desc = "Simple"
										image_src = "../../images/simple_2.jpg"
										image_alt = "Here"
										/>
								</Link>

								<Link to="/simple_3" className = "grid-item">
									<Card
										title = "Basic"
										desc = "Basic"
										image_src = "../../images/simple_3.jpg"
										image_alt = "Here"
										/>
								</Link>
							</div>
						</div>

						<div label="Badges">
							<div className="grid-container">
								<Link to="/badges_1" className="grid-item">
									<Card
										title = "Creative"
										desc = "Badges Profile"
										image_src = "../../images/badges_1.jpg"
										image_alt = "Here"
										/>
								</Link>

								<Link to="/badges_2" className = "grid-item">
									<Card
										title = "Modern"
										desc = "Badges Profile"
										image_src = "../../images/badges_2.jpg"
										image_alt = "Here"
										/>
								</Link>

								<Link to="/badges_3" className = "grid-item">
									<Card
										title = "Functional"
										desc = "Badges Profile"
										image_src = "../../images/badges_3.jpg"
										image_alt = "Here"
										/>
								</Link>
							</div>
						</div>				

						<div label="Icons">
							<div className="grid-container">
								<Link to="/icons_1" className="grid-item">
									<Card
										title = "Iconic"
										desc = "Icons Profile"
										image_src = "../../images/badges_1.jpg"
										image_alt = "Here"
										/>
								</Link>
							</div>
						</div>

					</Tabs>
				</div>
			</div>
		</>
	)
}

export default Templates;