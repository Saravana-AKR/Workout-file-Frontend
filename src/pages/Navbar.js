import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
				<div className='container-fluid'>
					<NavLink
						className='navbar-brand'
						
					>
						SkyLine
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div
						className='collapse navbar-collapse '
						id='navbarNav'
                        
					>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0 p-2'>
							<li className='nav-item me-5'>
								<NavLink
									className='nav-link active'
									aria-current='page'
									to='/'
								>
									Home
								</NavLink>
							</li>
							<li className='nav-item me-5'>
								<NavLink
									className='nav-link'
									to='/about'
								>
									About
								</NavLink>
							</li>
							<li className='nav-item me-5'>
								<NavLink
									className='nav-link'
									to='/product'
								>
									Product
								</NavLink>
							</li>
							<li className='nav-item me-5'>
								<NavLink
									className='nav-link'
									to='/contact'
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
