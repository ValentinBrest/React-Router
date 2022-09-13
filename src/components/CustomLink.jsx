import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CunstomLink = ({ to, children, ...props }) => {
    const match = useMatch(to);
    return (
        <Link to={to} {...props} style={{color: match ? 'white': 'black'}}>
            {children}
        </Link>
    );
};
export default CunstomLink;
