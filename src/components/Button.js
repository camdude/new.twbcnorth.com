import React from 'react';
import { Link } from 'react-router-dom';

const button = props => {
    return (
        <Link to={props.link} className="btn">{props.children}</Link>
    );
}

export default button;