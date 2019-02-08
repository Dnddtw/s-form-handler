import React from 'react';
import { string, any, func } from 'prop-types';

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
                onChange={inputChangeHandler}
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

Input.defaultProps = {
    value: "",
    error: ""
};

Input.propTypes = {
    type: string.isRequired,
    value: any.isRequired,
    name: string,
    inputChangeHandler: func.isRequired,
    error: any
};

export default Input;