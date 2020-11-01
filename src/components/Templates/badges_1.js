import React,{Component} from 'react';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import Tabs from '../../components/Tab/Tabs';
import {Button} from '../../components/Button/Button';
const ReactMarkdownWithHtml = require('react-markdown/with-html')

class badges_1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			markdown:"# I am Harika B V 👷🏽‍♂️\n\nA tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organizations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.\n\n### I'm Currently\n\n- 💼 I am currently working Github Profile Readme Creator\n\n- ✍️ I am currently learning React JS\n\n- 🌱  I am currently looking to collaborate on React JS\n\n### Stuff I'm really good at\n\nJava | Android Development | Frontend\n\n---\n\n<h4 align='center'>📫 Reach me on</h4>\n\n<p align='center'> <a href = https://www.linkedin.com/in/harika-b-v><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://www.behance.net/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/behance.svg height='30' weight='30'></a> • <a href = https://github.com/harika-bv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://twitter.com/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg height='30' weight='30'></a></p>\n\n![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=harika-bv&layout=compact)",
			name:'Harika B V',
			about:'A tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organisations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.',
			skills:'Java | Python | Android',
			current__work : 'Github Profile Readme Creator',
			current__learning : 'React JS',
			current__collab : 'Web Projects',
			github__Username:'Harika-BV',
			linkedin__Username:'harika-b-v',
			twitter__Username: 'Harika',
			behance__Username: 'harikabv',
			email:'harikabhaskaram31@gmail.com'
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.updateMarkdown = this.updateMarkdown.bind(this);
	}
	
	copyToClip = (e) => {
		var tmp = document.createElement("textarea");
		tmp.value = this.state.markdown;
		tmp.style.height = "0";
		tmp.style.overflow = "hidden";
		tmp.style.position = "fixed";
		document.body.appendChild(tmp);
		tmp.focus();
		tmp.select();
		document.execCommand("copy");
		document.body.removeChild(tmp);
		alert('Profile readme is copied to clipboard');
	};

  	download = (e) => {
		const element = document.createElement("a");
    	const file = new Blob([this.state.markdown], {type: 'text/plain'});
    	element.href = URL.createObjectURL(file);
    	element.download = "README.txt";
    	document.body.appendChild(element);
    	element.click();
	};


	updateMarkdown(name, about, skills, current__work, current__learning,current__collab, github__Username, linkedin__Username, twitter__Username,behance__Username , email){
			
		var markdownUpdate = "# I am ";
		if(name){
			 markdownUpdate += name + "👷🏽‍♂️\n";
		}
		if(about){
			markdownUpdate += "### About me 🤓\n" ;
			markdownUpdate += about +"\n\n";
		}
		if(current__work){
			markdownUpdate += "### I'm currently" ;
			markdownUpdate += "\n\n- 💼 I am currently working "+current__work;
		}
		if(current__learning){
			markdownUpdate += "\n\n- ✍️ I am currently learning "+current__learning;
		}
		if(current__collab){
			markdownUpdate += "\n\n- 🌱  I am currently looking to collaborate on "+current__collab;
		}

		if(skills){
			markdownUpdate += "\n\n ### Stuff I'm really good at ";
			markdownUpdate += "\n\n" + skills +"\n\n---\n\n";
		}

		markdownUpdate += "<h4 align='center'>📫 Reach me on</h4>\n\n<p align='center'>"; 
		if(linkedin__Username){
			markdownUpdate += "\n\n<a href = https://www.linkedin.com/in/"+ linkedin__Username + "><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a>";
		}
		if(github__Username){
			
			markdownUpdate += " • <a href = https://github.com/"+github__Username+"><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg height='30' weight='30'></a>";
		}
		if(twitter__Username){
			markdownUpdate += " • <a href = https://twitter.com/"+twitter__Username+"><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/twitter.svg height='30' weight='30'></a>"
		}
		if(behance__Username){
			markdownUpdate += " • <a href = https://www.behance.net/"+behance__Username+"><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/behance.svg height='30' weight='30'></a>";
		}

		markdownUpdate += "</p>\n\n";
		if(github__Username){
			markdownUpdate += "![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username="+github__Username+"&layout=compact)";
		}

		
		this.setState({
			markdown : markdownUpdate
		});
	}

	handleTextChange(e){
		this.setState({ 
			[e.target.name]: e.target.value 
		}, () => {
			this.updateMarkdown(this.state.name, this.state.about, this.state.skills,this.state.current__work, this.state.current__learning, this.state.current__collab, this.state.github__Username, this.state.linkedin__Username, this.state.twitter__Username, this.state.behance__Username , this.state.email);
		});
	}

	render() {
		return (
			<>
				<div className ="home-row">
					<div className="home-col-left">
						<div className="headingContainer header">
							Markdown Preview (Creative Template)
						</div>
						
						<ReactMarkdownWithHtml  
							className="markdown-body"
							allowDangerousHtml 
                    		source={this.state.markdown} 
                		/>
                		
                		<div className = "buttons">
							<Button onClick={this.copyToClip} buttonStyle = "btn--outline" buttonSize = "btn--medium" buttonColor = "primary">Copy Markdown</Button>
							<Button onClick={this.download} buttonStyle = "btn--outline" buttonSize = "btn--medium" buttonColor = "primary">Download README</Button>
						</div>
					</div>

					<div className="home-col-right">	
						<Tabs>
					       <div label="Personal"> 
						     <form className="home-container">
								<TextInput
									inputType = {'text'}
									title = {'Full Name'}
									name = {'name'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your name here'} 
									value = {this.state.name}/>
									
								<TextArea
							        title={'About you'}
							        rows={5}
							        resize={false}
							        name={'about'}
							        controlFunc={this.handleTextChange}
							        placeholder={'Type about you here'}
							        value={this.state.about} />
						
								<TextInput
									inputType = {'text'}
									title = {'Skills'}
									name = {'skills'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your skills here'} 
									value={this.state.skills} />
	 						 </form>
	                        </div> 


						    <div label="Work"> 
								<form className="home-container">

								<TextInput
									inputType = {'text'}
									title = {'I am currently working on'}
									name = {'current__work'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your present project'} 
									value={this.state.current__work} />
								
								<TextInput
									inputType = {'text'}
									title = {'I am currently learning'}
									name = {'current__learning'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type here'} 
									value={this.state.current__learning} />							
								
								<TextInput
									inputType = {'text'}
									title = {'I am currently looking to collaborate on'}
									name = {'current__collab'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Github username here'}
									value={this.state.current__collab}  />

							    </form>
						    </div> 
						 
					        <div label="Social"> 
				              <form className="home-container">

								<TextInput
									inputType = {'text'}
									title = {'Linkedin Username'}
									name = {'linkedin__Username'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Linkedin username here'} 
									value={this.state.linkedin__Username} />							
								
								<TextInput
									inputType = {'text'}
									title = {'Github Username'}
									name = {'github__Username'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Github username here'}
									value={this.state.github__Username}  />

								<TextInput
									inputType = {'text'}
									title = {'Twitter Username'}
									name = {'twitter__Username'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Twitter username here'} 
									value={this.state.twitter__Username} />

								<TextInput
									inputType = {'text'}
									title = {'Behance Username'}
									name = {'behance__Username'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Behance username here'}
									value={this.state.behance__Username}  />
						        </form>
						    </div> 
						</Tabs> 	
					</div>					
				</div>
				
			</>
		);
	}
}

export default badges_1;