import React from 'react';

const feature = props => {
    return (
        <div className="feature">
            <div className="feature__heading">{props.heading}</div>
            <div className="feature__content">{props.children}</div>
        </div>
    );
}

export default feature;