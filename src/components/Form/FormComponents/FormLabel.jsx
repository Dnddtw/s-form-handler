import React from 'react';
import { string } from 'prop-types';

const FormLabel = (props) => (
    <label htmlFor={props.name} className="form__label">{props.children}</label>
);

FormLabel.propTypes = {
    name: string
}

export default FormLabel;