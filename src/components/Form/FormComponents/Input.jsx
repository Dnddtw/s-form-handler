import React from 'react';
import FormLabel from './FormLabel';
import InvalidInfo from './InvalidInfo';

const Input = (props) => {
    const {
        name,
        inputChangeHandler,
        value,
        error,
        type
    } = props;

    return (
        <div className="form__element">
            <FormLabel name={name}>{props.children}</FormLabel>
            <input
                onChange={event => inputChangeHandler({ name }, event)}
                className={`form__input ${error ? "invalid" : ""}`}
                id={name}
                autoComplete="off"
                type={type}
                name={name}
                value={value}
            />
            {error && <InvalidInfo>{error}</InvalidInfo>}
        </div>
    );
};

export default Input;