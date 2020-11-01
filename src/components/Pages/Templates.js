import React from 'react'
import Tabs from '../../components/Tab/Tabs';
import Card from '../../components/IndividualCard/IndividualCard';
import {Link} from 'react-router-dom';
import './style.css'
import simple1 from '../../images/simple_1.jpg'
import simple2 from '../../images/simple_2.jpg'
import simple3 from '../../images/simple_3.jpg'

import badges1 from '../../images/badges_1.jpg'
import badges2 from '../../images/badges_2.jpg'
import badges3 from '../../images/badges_3.jpg'

import icons1 from '../../images/simple_1.jpg'

import {Button} from '../../components/Button/Button';
function Templates() {
	return (
		<>
			<div className = "templates__body">
				<div className = "headingTemplates">
					<h1 style={{fontSize:'48px'}}>Create stunning</h1>
					<h2 style={{fontSize:'36px', marginBottom:'36px'}}>Github Profiles</h2>
					
					<Link to="/GPRC/DefaultTemplate" className="def">
						<Button buttonStyle = "btn--outline" buttonSize = "btn--wide" buttonColor = "red">Get Started</Button>
					</Link>
				</div>

				<div className = "templates">
					<Tabs>				
						<div label="Simple" className="grid">
							<div className="grid-container">
								<Link to="/GPRC/simple_1" className="grid-item">
									<Card
										title = "Executive"
										desc = "Executive"
										image_src = {simple1}
										image_alt = "Here"
										/>
								</Link>

								<Link to="/GPRC/simple_2" className = "grid-item">
									<Card
										title = "Simple"
										desc = "Simple"
										image_src = {simple2}
										image_alt = "Here"
										/>
								</Link>

								<Link to="/GPRC/simple_3" className = "grid-item">
									<Card
										title = "Basic"
										desc = "Basic"
										image_src = {simple3}
										image_alt = "Here"
										/>
								</Link>
							</div>
						</div>

						<div label="Badges">
							<div className="grid-container">
								<Link to="/GPRC/badges_1" className="grid-item">
									<Card
										title = "Creative"
										desc = "Badges Profile"
										image_src = {badges1}
										image_alt = "Here"
										/>
								</Link>

								<Link to="/GPRC/badges_2" className = "grid-item">
									<Card
										title = "Modern"
										desc = "Badges Profile"
										image_src = {badges2}
										image_alt = "Here"
										/>
								</Link>

								<Link to="/GPRC/badges_3" className = "grid-item">
									<Card
										title = "Functional"
										desc = "Badges Profile"
										image_src = {badges3}
										image_alt = "Here"
										/>
								</Link>
							</div>
						</div>				

						<div label="Icons">
							<div className="grid-container">
								<Link to="/GPRC/icons_1" className="grid-item">
									<Card
										title = "Iconic"
										desc = "Icons Profile"
										image_src = {icons1}
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