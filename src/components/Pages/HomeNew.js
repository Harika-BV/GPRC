import React from 'react'
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import './HomeNew.css'
import img1 from '../../images/image1.png'
import img2 from '../../images/image2.png'
import {FcFinePrint, FcTodoList, FcDownload, FcCheckmark} from 'react-icons/fc';
import {GoZap} from 'react-icons/go';
function HomeNew() {
	return (
		<>
			<div className={'home__hero-section darkBg'}>
				<div className="container">
					<div className="row home__hero-row" style={{display:'flex', flexDirection: 'row'}}>
						<div className="col">
							<div className="home__hero-text-wrapper">
								<div className="top-line">Create Stunning</div>
								<h1 className = "heading">Github Profiles</h1>
								<Link to="/GPRC/DefaultTemplate">
									<Button buttonSize="btn--wide" buttonColor="red">Get Started</Button>
								</Link>
							</div>
						</div>

						<div className="col">
							<div className="home__hero-img-wrapper">
								<img src={img1} alt="Github Readme Creator" className="home__hero-img"/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'home__hero-section'}>
			<h2 className="heading-2">Follow 4 steps to create your best github profile</h2>
				<div className="container">
					<div className = "row">
						<div className="home__steps-container">
							<div className="icon-1"><FcFinePrint style={{height:'5em', width:'5em', marginBottom:'30px'}}/></div>
							<p className="home__hero-subtitle">Choose the profile template</p>
						</div>
						<div className="home__steps-container">
							<div className="icon-1"><FcTodoList style={{height:'5em', width:'5em', marginBottom:'30px'}}/></div>
							<p className="home__hero-subtitle">Enter your details</p>
						</div>
						<div className="home__steps-container">
							<div className="icon-1"><FcDownload style={{height:'5em', width:'5em', marginBottom:'30px'}}/></div>
							<p className="home__hero-subtitle">Copy markdown or download README file </p>
						</div>
						<div className="home__steps-container">
							<div className="icon-1"><FcCheckmark style={{height:'5em', width:'5em', marginBottom:'30px'}}/></div>
							<p className="home__hero-subtitle">Update your GitHub profile</p>
						</div>
					</div>
				</div>
			</div>


			<div className={'home__hero-section darkBg'}>
				<div className="container">
					<div className="row home__hero-row" style={{display:'flex', flexDirection: 'row-reverse'}}>
						<div className="col">
							<div className="home__hero-text-wrapper">

								<p className="home__hero-subtitle2"><GoZap/> Make Use of Github's Special Repo feature to meke your profile standout</p>
								<p className="home__hero-subtitle2"><GoZap/> Craft your profile without need of markdown knowledge</p>
								<p className="home__hero-subtitle2"><GoZap/> Real time preview</p>
								<p className="home__hero-subtitle2"><GoZap/> An open source project</p>

								
								<Link to="/GPRC/DefaultTemplate">
									<Button buttonSize="btn--wide" buttonColor="red">Get Started</Button>
								</Link>
							</div>
						</div>


						<div className="col" style={{float:'left'}}>
							<div className="home__hero-img-wrapper">
								<img src={img2} alt="Github Readme Creator" className="home__hero-img"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeNew;