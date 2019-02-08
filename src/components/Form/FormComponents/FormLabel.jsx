import React from 'react';

const FormLabel = (props) => (
    <label htmlFor={props.name} className="form__label">{props.children}</label>
);

export default FormLabel;