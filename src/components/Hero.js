import React from 'react';

const hero = props => {
    return (
        <div className="hero">
            <div className="hero__heading">{props.heading}</div>
            <div className="hero__content">{props.children}</div>
        </div>
    );
}

export default hero;