import React from 'react'
import './IndividualCard.css';


const Card = ({
  title,
  desc,
  image_src,
  image_alt,
}) => (

	<div className="StyledContainer">
		<img src={image_src} alt={image_alt} height="250px" width="200px"/>
		<br/><br/>
		<h2 className="title">{title}</h2>
	</div>
);

export default Card

