import React from 'react';

const conference = props => {
    return (
        <div className="conference">
            <div className="conference__content">
                <a href={props.link} className="heading-secondary conference__title">{props.title}</a>
                <div className="conference__date"><i className="fa fa-calendar" /> {props.date}</div>
            </div>
            <div className="conference__brochure">
                <img src={props.img} alt={props.imgAlt} className="conference__image" />
            </div>
        </div>
    );
}

export default conference;