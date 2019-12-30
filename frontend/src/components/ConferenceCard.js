import React from 'react';

import Text from './UIElements/Text';

const conferenceCard = props => {
    return (
        <div className="conference-card">
            <div className="conference-card__details">
                <Text element="link" to={props.link}>
                    <Text element="h3">{props.title}</Text>
                </Text>
                <Text><i className="fa fa-calendar" /> {props.date}</Text>
            </div>
            <img src={props.img} alt={props.alt} className="conference-card__image" />   
        </div>
    );
}

export default conferenceCard;