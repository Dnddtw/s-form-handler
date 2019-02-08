import React from 'react';
import { string, func, bool } from 'prop-types';

const FormCheckbox = props => {
    const {
      name,
      required,
      inputChangeHandler,
      value
    } = props;
  
    return (
      <div className="form__element checkbox">
        <label htmlFor={name} className="checkbox__label">
          <input
            className="checkbox__checkbox"
            onChange={inputChangeHandler}
            id={name}
            checked={value}
            required={required}
            name={name}
            type="checkbox"
          />
          <span className="checkbox__checkmark" /> {props.children}
        </label>
      </div>
    );
};

FormCheckbox.propTypes = {
  inputChangeHandler: func.isRequired,
  value: bool,
  name: string
};

FormCheckbox.defaultProps = {
  required: false,
  value: true
};

export default FormCheckbox;