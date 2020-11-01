import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../images/logo_gprc.png'; 

function Navbar(){
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return(
		<>
			<div className="navbar">
				<div className="navbar-container container">
					<Link to="/GPRC/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={logo} alt="Markdown Live preview logo" width="50px" height="50px"/>
					</Link>
					
					<div className = "menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>

					<ul className={click ? 'nav-menu active' :'nav-menu'}>
						<li className="nav-item">
							<Link to="/GPRC/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link to='/GPRC/Templates' className="nav-links" onClick={closeMobileMenu}> 
								Templates 
							</Link>
						</li>

						<li className="nav-item">
							<Link to='/GPRC/HowToUse' className="nav-links" onClick={closeMobileMenu}> 
								How to use 
							</Link>
						</li>

					</ul>
				</div>
			</div>
		
		</>
	);
}


export default Navbar;