import React from 'react';
import { Link } from 'react-router-dom';

const FormAdditional = props => (
    <div className="popup__additional">
        <Link className="popup__link" to={props.formURL}>{props.children}</Link>
    </div>
);

export default FormAdditional;