import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">MERN VideosApp</Link>
				<div className="container">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggle-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/new-video" className="nav-link">Create Video</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;