import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CunstomLink from './CustomLink';

const setActive = ({isActive}) => isActive ? 'active-link': '';

const Layout = () => {
	return (
        <>
            <header>
                <NavLink to="/" className={setActive}>Home</NavLink>
                <CunstomLink to="/blog" className={setActive}>Blog</CunstomLink> 
                <CunstomLink to="/about" className={setActive}>About</CunstomLink>
            </header>
            <Outlet />
            <footer>2022</footer>
        </>
    );
};

export default Layout;