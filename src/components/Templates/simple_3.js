import React,{Component} from 'react';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import Tabs from '../../components/Tab/Tabs';
import {Button} from '../../components/Button/Button';
const ReactMarkdownWithHtml = require('react-markdown/with-html')

class simple_3 extends Component{
	constructor(props){
		super(props);
		this.state = {
			markdown:"<h1 align='center'>Harika ✨</h1>\n\n---\n\nA tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organizations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.\n\n---\n\n<h4 align='center'>📫 Reach me on</h4>\n\n<p align='center'> <a href = https://www.linkedin.com/in/harika-b-v><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://www.behance.net/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/behance.svg height='30' weight='30'></a> • <a href = https://github.com/harika-bv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://twitter.com/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg height='30' weight='30'></a></p>",
			name:'Harika B V',
			about:'A tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organisations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.',
			skills:'Java | Python | Android',
			portfolio:'www.harikabv.com',
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


	updateMarkdown(name, about, skills,portfolio, current__work, current__learning,current__collab, github__Username, linkedin__Username, twitter__Username,behance__Username , email){
			
		var markdownUpdate="";
		if(name){
			 markdownUpdate += "<h1 align='center'>"+ name + "✨</h1>\n\n---\n\n";
		}
		if(about){
			markdownUpdate += about + "\n\n---\n\n";
		}

		markdownUpdate += "<h4 align='center'>📫 Reach me on</h4><p align ='center'>";
		if(linkedin__Username){
			markdownUpdate += "<a href = https://www.linkedin.com/in/"+ linkedin__Username + "><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a>";
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
		markdownUpdate +="</p>";

		this.setState({
			markdown : markdownUpdate
		});
	}

	handleTextChange(e){
		this.setState({ 
			[e.target.name]: e.target.value 
		}, () => {
			this.updateMarkdown(this.state.name, this.state.about, this.state.skills, this.state.portfolio,this.state.current__work, this.state.current__learning, this.state.current__collab, this.state.github__Username, this.state.linkedin__Username, this.state.twitter__Username, this.state.behance__Username , this.state.email);
		});
	}

	render() {
		return (
			<>
				<div className ="home-row">
					<div className="home-col-left">
						<div className="headingContainer header">
							Markdown Preview (Basic Template)
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

export default simple_3;