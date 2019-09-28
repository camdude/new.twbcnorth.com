import React from 'react';
import { Link } from 'react-router-dom';

const card = props => {
    return (
        <div className="card">
            <div className="heading-secondary">{props.heading}</div>
            <div className="card__content">{props.children}</div>
            <Link to={props.link} className="btn-text">{props.btnText} &rarr;</Link>
        </div>
    );
}

export default card;