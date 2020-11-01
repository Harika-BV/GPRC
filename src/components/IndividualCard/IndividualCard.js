import React from 'react'
import './IndividualCard.css';


const Card = ({
  title,
  desc,
  image_src,
  image_alt,
}) => (

	<div className="StyledContainer">
		<img className="image_individual"src={image_src} alt={image_alt}/>
		<br/><br/>
		<h2 className="title">{title}</h2>
	</div>
);

export default Card

