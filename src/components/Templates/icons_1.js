import React,{Component} from 'react';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import Tabs from '../../components/Tab/Tabs';
import {Button} from '../../components/Button/Button';
import { Multiselect } from 'multiselect-react-dropdown';

const ReactMarkdownWithHtml = require('react-markdown/with-html')

class icons_1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			db_options: [{name:'MySQL', id: 1}, {name: 'Postgres', id:2},{name:'MongoDB', id:3},{name:'SQLite',id:4},{name:'Oracle', id:5}],
			frameworks_options:[{name: 'Express.js',id:1},{ name: 'React',id:2},{ name: 'React Native',id:3},{ name: 'Vue.js',id:4},{ name: 'Angular',id:5},{ name: 'Angular.js',id:6},{ name: 'TailwindCSS',id:7},{ name: 'Semantic UI',id:8},{ name: 'Bootstrap',id:9},{ name: 'Material UI',id:10},{ name: 'Redux',id:11},{ name: 'jQuery',id:12},{ name: 'Django',id:13},{ name: 'Rails',id:14},{ name: 'Laravel',id:15},{ name: 'Spring',id:16},{ name: 'Flask',id:17},{ name: 'Flutter',id:18},{ name: 'FastAPI',id:19},{ name: 'SASS',id:20},{ name: 'NuxtJS',id:21},{ name: 'Stylus',id:22},{ name: 'Webpack',id:23},{ name: 'NestJS',id:24},{ name: 'Strapi',id:25}],
			prog_lang:[{ name: 'Node.js',id:1},{ name: 'JavaScript',id:2},{ name: 'TypeScript',id:3},{ name: 'HTML5',id:4},{ name: 'CSS3',id:5},{ name: 'Python',id:6},{ name: 'C',id:7},{ name: 'C++',id:8},{ name: 'C#',id:9},{ name: 'Java',id:10},{ name: 'PHP',id:11},{ name: 'R',id:12},{ name: 'Swift',id:13},{ name: 'Kotlin',id:14},{ name: 'Go',id:15},{ name: 'Ruby',id:16},{ name: 'Scala',id:17},{ name: 'Rust',id:18},{ name: 'Dart',id:19},{ name: 'Lua',id:20},{ name: 'Perl',id:21},{ name: 'Elixir',id:22},{ name: 'Markdown',id:23},{ name: 'Shell Script',id:24}],
			
			lang_markdown:"## Programming Languages\n\n  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>",
			framework_markdown:"## Frameworks\n\n  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>",
			db_markdown:"## Database\n\n <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>  <img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>",

			markdown:"# Hi there 👋 I'm Harika  V,\n\nA tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organizations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.\n\n<h4 align='center'>📫 Reach me on</h4>\n\n<p align='center'> <a href = https://www.linkedin.com/in/harika-b-v><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://www.behance.net/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/behance.svg height='30' weight='30'></a> • <a href = https://github.com/harika-bv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://twitter.com/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg height='30' weight='30'></a></p>",
			
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
		this.onSelectProgrammingLanguages = this.onSelectProgrammingLanguages.bind(this);

	}
	
	copyToClipboard = (e) => {
		var textField = document.createElement('textarea')
	    textField.innerText = this.state.markdown
	    document.body.appendChild(textField)
	    textField.select()
	    document.execCommand('copy')
	    textField.remove()
	    alert('Markdown copied successfully');

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
			
		var markdownUpdate = "# Hey 👋, This is ";
		if(name){
			 markdownUpdate += name + "\n";
		}
		if(about){
			markdownUpdate += "### About me 🤓\n" ;
			markdownUpdate += about;
		}
	
		if(current__work){
			markdownUpdate += "\n\n- 💼 I am currently working "+current__work;
		}
		if(current__learning){
			markdownUpdate += "\n\n- ✍️ I am currently learning "+current__learning;
		}
		if(current__collab){
			markdownUpdate += "\n\n- 🌱  I am currently looking to collaborate on "+current__collab;
		}
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

	onSelectProgrammingLanguages(selectedList, selectedItem) {
		var markdownUpdate = "## Programming Languages";
		for (var i = 0; i < selectedList.length; i ++ ){
			if(selectedList[i].id === 1)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white'/>";
			else if(selectedList[i].id === 2)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/>";				
			else if(selectedList[i].id === 3)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white'/>";
			else if(selectedList[i].id === 4)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white'/>";
			else if(selectedList[i].id === 5)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white'/>";
			else if(selectedList[i].id === 6)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white'/>";
			else if(selectedList[i].id === 7)
				markdownUpdate += "\n\n<img src='https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white'/>";
			else if(selectedList[i].id === 8)
				markdownUpdate += "<img src='https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&ogoColor=white'/>";
			else if(selectedList[i].id === 9)
				markdownUpdate += "<img src='https://img.shields.io/badge/c%23%20-%23239120.svg?&style=for-the-badge&logo=c-sharp&logoColor=white'/>";
			else if(selectedList[i].id === 10)
				markdownUpdate += "<img src='https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white'/>";
			else if(selectedList[i].id === 11)
				markdownUpdate += "<img src='https://img.shields.io/badge/php-%23777BB4.svg?&style=for-the-badge&logo=php&logoColor=white'/>";
			else if(selectedList[i].id === 12)
				markdownUpdate += "<img src='https://img.shields.io/badge/r-%23276DC3.svg?&style=for-the-badge&logo=r&logoColor=white'/>";
			else if(selectedList[i].id === 13)
				markdownUpdate += "<img src='https://img.shields.io/badge/swift-%23FA7343.svg?&style=for-the-badge&logo=swift&logoColor=white'/>";
			else if(selectedList[i].id === 14)
				markdownUpdate += "<img src='https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white'/>";
			else if(selectedList[i].id === 15)
				markdownUpdate += "<img src='https://img.shields.io/badge/go-%2300ADD8.svg?&style=for-the-badge&logo=go&logoColor=white'/>";
			else if(selectedList[i].id === 16)
				markdownUpdate += "<img src='https://img.shields.io/badge/ruby-%23CC342D.svg?&style=for-the-badge&logo=ruby&logoColor=white'/>";
			else if(selectedList[i].id === 17)
				markdownUpdate += "<img src='https://img.shields.io/badge/scala-%23DC322F.svg?&style=for-the-badge&logo=scala&logoColor=white'/>";
			else if(selectedList[i].id === 18)
				markdownUpdate += "<img src='https://img.shields.io/badge/rust-%23000000.svg?&style=for-the-badge&logo=rust&logoColor=white'/>";
			else if(selectedList[i].id === 19)
				markdownUpdate += "<img src='https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white'/>";
			else if(selectedList[i].id === 20)
				markdownUpdate += "<img src='https://img.shields.io/badge/lua-%232C2D72.svg?&style=for-the-badge&logo=lua&logoColor=white'/>";
			else if(selectedList[i].id === 21)
				markdownUpdate += "<img src='https://img.shields.io/badge/perl-%2339457E.svg?&style=for-the-badge&logo=perl&logoColor=white'/>";
			else if(selectedList[i].id === 22)
				markdownUpdate += "<img src='https://img.shields.io/badge/elixir-%234B275F.svg?&style=for-the-badge&logo=elixir&logoColor=white'/>";
			else if(selectedList[i].id === 23)
				markdownUpdate += "<img src='https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white'/>";
			else if(selectedList[i].id === 24)
				markdownUpdate += "<img src='https://img.shields.io/badge/shell_script%20-%23121011.svg?&style=for-the-badge&logo=gnu-bash&logoColor=white'/>";
		}

		this.setState({
			lang_markdown : markdownUpdate
		});

		console.log(markdownUpdate);
	}

	render() {
		return (
			<>
				<div className ="home-row">
					<div className="home-col-left">
						<div className="headingContainer header">
							Markdown Preview (Simple-1 Template)
						</div>
						
						<ReactMarkdownWithHtml  
							className="markdown-body"
							allowDangerousHtml 
                    		source={ this.state.markdown} 
                		/>
						<ReactMarkdownWithHtml  
							className="markdown-body"
							allowDangerousHtml 
                    		source={this.state.lang_markdown} 
                		/>
						<ReactMarkdownWithHtml  
							className="markdown-body"
							allowDangerousHtml 
                    		source={this.state.framework_markdown} 
                		/>
                		<ReactMarkdownWithHtml  
							className="markdown-body"
							allowDangerousHtml 
                    		source={this.state.db_markdown} 
                		/>
                		<div className = "buttons">
						<Button onClick={this.copyToClipboard} buttonStyle = "btn--outline" buttonSize = "btn--medium" buttonColor = "primary">Copy Markdown</Button>
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
					
	 						 </form>
	                        </div> 


						    <div label="Work"> 
								<form className="home-container">
									<div className = "form-group">
										<label className = "form-label">Frameworks</label>
										<Multiselect
											className="form-input"
											options={this.state.frameworks_options}
											onSelect={this.onSelectProgrammingLanguages} 
											onRemove={this.onSelectProgrammingLanguages} 
											displayValue="name"
										/>
									</div>

									<div className = "form-group">
										<label className = "form-label">Programming languages</label>
										<Multiselect
											className="form-input"
											options={this.state.prog_lang}
											onSelect={this.onSelectProgrammingLanguages} 
											onRemove={this.onSelectProgrammingLanguages} 
											displayValue="name" 
										/>
									</div>

									<div className = "form-group">
										<label className = "form-label">Database</label>
										<Multiselect
											className="form-input"
											options={this.state.db_options}
											onSelect={this.onSelect} 
											onRemove={this.onRemove} 
											displayValue="name" 
										/>
									</div>

							    </form>
						    </div> 
						 
					        <div label="Social"> 
				              <form className="home-container">

								<TextInput
									inputType = {'text'}
									title = {'Portfolio'}
									name = {'portfolio'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your skills here'} 
									value={this.state.portfolio} />
								
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

								<TextInput
									inputType = {'text'}
									title = {'Email'}
									name = {'email'}
									controlFunc = {this.handleTextChange}
									placeholder={'Type your Email here'} 
									value={this.state.email} />
		
						        </form>
						    </div> 
						</Tabs> 	
					</div>					
				</div>
				
			</>
		);
	}
}

export default icons_1;