import React from 'react';

const card = props => {
    return (
        <div className="card">
            <div className="heading-secondary">{props.heading}</div>
            <div className="card__content">{props.children}</div>
            <a href="/#" className="btn-text">{props.btnText} &rarr;</a>
        </div>
    );
}

export default card;