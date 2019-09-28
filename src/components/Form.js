import React from 'react';

import Button from './Button';

const form = props => {
    return (
        <form action="#" className="form">
            <h2 className="heading-secondary">{props.title}</h2>
            {props.children}
            <div className="form__group">
                <Button link="" className="btn">{props.btnText}</Button>
            </div>
        </form>
    );
}

export default form;