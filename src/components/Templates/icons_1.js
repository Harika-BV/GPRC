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
			
			lang_markdown:"## Programming Languages\n\n<img src='https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/><img src='https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white'/>",
			framework_markdown:"## Frameworks\n\n<img src='https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>",
			db_markdown:"## Databases\n\n<img src='https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white'/>",

			markdown:"# Hi there 👋 I'm Harika B V\n\n### About me 🤓\n\nA tech enthusiast with passion to solve problems and to make things. Proven skills in Android application development, python programming, UI/UX Design with work experience in various organisations and technical teams and I believe that I am a versatile learner and can get going with any sort of work.\n\n<h4 align='center'>📫 Reach me on</h4>\n\n<p align='center'>\n\n<a href = https://www.linkedin.com/in/harika-b-v><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg height='30' weight='30'></a> • <a href = https://github.com/Harika-BV><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/github.svg height='30' weight='30'></a> • <a href = https://twitter.com/Harika><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/twitter.svg height='30' weight='30'></a> • <a href = https://www.behance.net/harikabv><img src=https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/behance.svg height='30' weight='30'></a></p>",
			
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
		this.onSelectingDatabase = this.onSelectingDatabase.bind(this);
		this.onSelectingFrameworks = this.onSelectingFrameworks.bind(this);

	}
	
	copyToClip = (e) => {
		var tmp = document.createElement("textarea");
		tmp.value = this.state.markdown + this.state.lang_markdown + this.state.framework_markdown + this.state.db_markdown;
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
    	const file = new Blob([this.state.markdown + this.state.lang_markdown + this.state.framework_markdown + this.state.db_markdown], {type: 'text/plain'});
    	element.href = URL.createObjectURL(file);
    	element.download = "README.txt";
    	document.body.appendChild(element);
    	element.click();
	};


	updateMarkdown(name, about, skills,portfolio, current__work, current__learning,current__collab, github__Username, linkedin__Username, twitter__Username,behance__Username , email){
			
		var markdownUpdate = "# Hi there 👋 I'm ";
		if(name){
			 markdownUpdate += name + "\n";
		}
		if(about){
			markdownUpdate += "### About me 🤓\n" ;
			markdownUpdate += about;
		}

		markdownUpdate += "<h4>📫 Reach me on</h4>\n\n<p align='center'>\n\n";

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
		markdownUpdate += "</p>";
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
	onSelectingDatabase(selectedList, selectedItem) {
		var markdownUpdate = "\n\n## Databases\n\n";
		for (var i = 0; i < selectedList.length; i ++ ){
			if(selectedList[i].id === 1)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white'/>";
			else if(selectedList[i].id === 2)
				markdownUpdate += "\n\n <img src ='https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white'/>";				
			else if(selectedList[i].id === 3)
				markdownUpdate += "\n\n <img src ='https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white'/>";
			else if(selectedList[i].id === 4)
				markdownUpdate += "\n\n <img src ='https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white'/>";
			else if(selectedList[i].id === 5)
				markdownUpdate += "\n\n <img src ='https://img.shields.io/badge/oracle%20-%23F00000.svg?&style=for-the-badge&logo=oracle&logoColor=white' />";
		}

		this.setState({
			db_markdown : markdownUpdate
		});

		console.log(markdownUpdate);
	}

	onSelectingFrameworks(selectedList, selectedItem) {
		var markdownUpdate = "\n\n## Frameworks\n\n";
		for (var i = 0; i < selectedList.length; i ++ ){
			if(selectedList[i].id === 1)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge'/>";
			else if(selectedList[i].id === 2)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB'/>";				
			else if(selectedList[i].id === 3)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white'/>";
			else if(selectedList[i].id === 4)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=for-the-badge&logo=vue.js&logoColor=%234FC08D'/>";
			else if(selectedList[i].id === 5)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/angular%20-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white'/>";
			else if(selectedList[i].id === 6)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/angular.js%20-%23E23237.svg?&style=for-the-badge&logo=angularjs&logoColor=white'/>";
			else if(selectedList[i].id === 7)
				markdownUpdate += "\n\n <img src='https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white'/>";
			else if(selectedList[i].id === 8)
				markdownUpdate += " <img src='https://img.shields.io/badge/semantic%20UI%20-%234ABDB2.svg?&style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTYgMjU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI0LjUsMjA3LjFjLTIyLjktMi00MC4xLTE0LjUtNjEuOS0yMy44Yy05LjUsMTQuNS0yMC42LDI0LjQtMzAuMSwzOWMzNy45LDI0LjMsODIuNyw0MS42LDEyOC44LDMwLjINCgljMzUuMy04LjcsNTcuNS0zNS4yLDYwLjEtNzIuMWMyLTI5LTE1LjEtNTEuNi00OC43LTY1LjZjLTE4LjQtNy43LTM0LjgtMTUtNTMuNS0yMS45Yy0xMS4zLTQuMi0yMi4yLTEwLjktMjAtMjMuMg0KCWMyLjQtMTMuMSwxMy43LTIwLjMsMjYuOS0yMC42YzIzLjEtMC40LDQwLjcsOC43LDYwLjYsMjAuMmMxMC4zLTEzLjYsMTguMy0yMy40LDI4LjctMzcuMUMxNzYuMyw3LDE0Ni42LTEwLDkyLjYsNi42DQoJYy0zNS4xLDEwLjktNDkuNSw0NS44LTQ5LjUsNjNDNDEsOTkuMSw1My43LDEyNC4xLDg1LDEzNi45YzE2LjksNi45LDM0LjIsMTQuNCw1MS40LDIwLjVjMTQuNSw1LjEsMjkuNCwxNC4zLDI2LjEsMzEuNA0KCUMxNTksMjA3LjcsMTQwLjcsMjA4LjUsMTI0LjUsMjA3LjF6Ii8+DQo8L3N2Zz4NCg=='/>";
			else if(selectedList[i].id === 9)
				markdownUpdate += " <img src='https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white'/>";
			else if(selectedList[i].id === 10)
				markdownUpdate += " <img src='https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white'/>";
			else if(selectedList[i].id === 11)
				markdownUpdate += " <img src='https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white'/>";
			else if(selectedList[i].id === 12)
				markdownUpdate += " <img src='https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white'/>";
			else if(selectedList[i].id === 13)
				markdownUpdate += " <img src='https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white'/>";
			else if(selectedList[i].id === 14)
				markdownUpdate += " <img src='https://img.shields.io/badge/rails%20-%23CC0000.svg?&style=for-the-badge&logo=ruby-on-rails&logoColor=white'/>";
			else if(selectedList[i].id === 15)
				markdownUpdate += " <img src='https://img.shields.io/badge/laravel%20-%23FF2D20.svg?&style=for-the-badge&logo=laravel&logoColor=white'/>";
			else if(selectedList[i].id === 16)
				markdownUpdate += " <img src='https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white'/>";
			else if(selectedList[i].id === 17)
				markdownUpdate += " <img src='https://img.shields.io/badge/flask%20-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white'/>";
			else if(selectedList[i].id === 18)
				markdownUpdate += "	<img src='https://img.shields.io/badge/Flutter%20-%2302569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white'/>";
			else if(selectedList[i].id === 19)
				markdownUpdate += " <img src='https://img.shields.io/badge/fastapi%20-%2313988a.svg?&style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYuMzQ5OTk5OSA2LjM0OTk5OTkiCiAgIGhlaWdodD0iNi4zNDk5OTk5bW0iCiAgIHdpZHRoPSI2LjM0OTk5OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcuNTM5Mjg2LC04NC40MjYxOTEpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoODE1IgogICAgICAgZD0ibSA4Ny41MzkyODYsODQuNDI2MTkxIGggNi4zNSB2IDYuMzUgaCAtNi4zNSB6IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7ZmlsbDojZmZmZmZmIgogICAgICAgaWQ9InBhdGg4MTciCiAgICAgICBkPSJtIDkwLjcxNDI4Niw4NC45NjA2NDkgYyAtMS40NTc4NTQsMCAtMi42NDA1NDIsMS4xODI2ODggLTIuNjQwNTQyLDIuNjQwNTQyIDAsMS40NTc4NTQgMS4xODI2ODgsMi42NDA1NDIgMi42NDA1NDIsMi42NDA1NDIgMS40NTc4NTQsMCAyLjY0MDU0MiwtMS4xODI2ODggMi42NDA1NDIsLTIuNjQwNTQyIDAsLTEuNDU3ODU0IC0xLjE4MjY4OCwtMi42NDA1NDIgLTIuNjQwNTQyLC0yLjY0MDU0MiB6IG0gLTAuMTM3NTgzLDQuNzU3MjA5IHYgLTEuNjU2MjkyIGggLTAuOTIwNzUgbCAxLjMyMjkxNiwtMi41NzcwNDIgdiAxLjY1NjI5MiBoIDAuODg2MzU0IHoiIC8+CiAgPC9nPgo8L3N2Zz4K'/>";
			else if(selectedList[i].id === 20)
				markdownUpdate += " <img src='https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white'/>";
			else if(selectedList[i].id === 21)
				markdownUpdate += " <img src='https://img.shields.io/badge/NuxtJS%20-black.svg?&style=for-the-badge&logo=NuxtJS&logoColor=white'/>";
			else if(selectedList[i].id === 22)
				markdownUpdate += " <img src='https://img.shields.io/badge/stylus%20-hotpink.svg?&style=for-the-badge&logo=stylus&logoColor=white'/>";
			else if(selectedList[i].id === 23)
				markdownUpdate += " <img src='https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black' />";
			else if(selectedList[i].id === 24)
				markdownUpdate += " <img src='https://img.shields.io/badge/nestjs%20-%23E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white' />";
			else if(selectedList[i].id === 25)
				markdownUpdate += " <img src='https://img.shields.io/badge/strapi%20-%232E7EEA.svg?&style=for-the-badge&logo=strapi&logoColor=white'/>";
				
		}

		this.setState({
			framework_markdown : markdownUpdate
		});

		console.log(markdownUpdate);
	}


	onSelectProgrammingLanguages(selectedList, selectedItem) {
		var markdownUpdate = "\n\n## Programming Languages\n\n";
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
							Markdown Preview (Iconic Template)
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
					
	 						 </form>
	                        </div> 


						    <div label="Work"> 
								<form className="home-container">
									<div className = "form-group">
										<label className = "form-label">Frameworks</label>
										<Multiselect
											className="form-input"
											options={this.state.frameworks_options}
											onSelect={this.onSelectingFrameworks} 
											onRemove={this.onSelectingFrameworks} 
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
											onSelect={this.onSelectingDatabase} 
											onRemove={this.onSelectingDatabase} 
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