import React from 'react';

const formGroup = props => {
    let input = null;
    switch (props.input) {
        case 'select':
            input = <select defaultValue={props.defaultValue} name="" id={props.id} className="form__select" required={props.required}>
                        {props.children}
                    </select>;
            break;

        case 'textarea':
            input = <textarea className="form__textarea" id={props.id} placeholder={props.placeholder} required={props.required} />;
            break;
    
        default:
            input = <input type={props.type} className="form__input" id={props.id} placeholder={props.placeholder} required={props.required} />;
            break;
    }

    return (
        <div className="form__group">
            {input}
            <label htmlFor={props.id} className="from__label">{props.placeholder}</label>
        </div>
    );
}

export default formGroup;