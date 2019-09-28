import React from 'react';
import { Link } from 'react-router-dom';

const conference = props => {
    return (
        <div className="conference">
            <div className="conference__content">
                <Link to={props.link} className="heading-secondary conference__title">{props.title}</Link>
                <div className="conference__date"><i className="fa fa-calendar" /> {props.date}</div>
            </div>
            <div className="conference__brochure">
                <img src={props.img} alt={props.imgAlt} className="conference__image" />
            </div>
        </div>
    );
}

export default conference;