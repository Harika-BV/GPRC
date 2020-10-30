import React, {Component} from 'react';
import Faq from "react-faq-component";
import './HowToUse.css';
const data = {
	
	title : "How To Use",
	rows:[
		{
			title : "What is GitHub special repo 🎇 ?",
			content: "Github is a community where you share your work and ongoing projects and showcase your skills. Github's new secret feature to create the profile using a special repo by naming it exactly same as the username helps to customise the profile",
		},
		{
			title : "How to create Special Repository in Github ?",
			content: "1. Create a new repository, name with your username\n2. Initialize the repository with a README.md file\n3. Create it with 'create repository' button\n4. Make changes in the README.md file to have a customised profile",
		},
		
		{
			title : "How to use this website",
			content: "1. Go to Templates page\n 2. Choose the template\n3. Enter your details\n4. Copy markdown or download README.md and replace in your special repo's README.md file",
		},
	],
};

const styles={
	titleTextColor : "#252525",
	rowTitleColor : "#e63333",
	arrowColor : "#e63333",
	rowContentPaddingTop : "20px",
	rowContentPaddingBottom : "20px",
	rowContentPaddingLeft : "20px",
	rowContentPaddingRight : "20px",
};

const config = {
	animate : true,
	arrowIcon : "V",
	tabFocus: true,
}

function HowToUse(){
	return(
		<>
			<div className="class_howToUse">
				<Faq data={data} styles={styles} config={config}/> 
			</div>
		</>
	);
}

export default HowToUse;