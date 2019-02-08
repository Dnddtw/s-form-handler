import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const FormAdditional = props => (
    <div className="popup__additional">
        <Link className="popup__link" to={props.formURL}>{props.children}</Link>
    </div>
);

FormAdditional.propTypes = {
    formURL: string.isRequired,
    children: string.isRequired
}

export default FormAdditional;