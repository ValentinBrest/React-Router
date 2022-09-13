import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AboutPage = () => {
	return (
			<div className='page about'>
				This is a About Page!
				<Link to="contacts">Our Contacts</Link>
				<Link to="team">Out Team</Link>
				<Outlet/>
			</div>
	);
};

export default AboutPage;