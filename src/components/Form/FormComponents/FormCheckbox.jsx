import React from 'react';

const FormCheckbox = props => {
    const {
      name,
      required = false,
      inputChangeHandler,
      value
    } = props;
  
    return (
      <div className="form__element checkbox">
        <label htmlFor={name} className="checkbox__label">
          <input
            className="checkbox__checkbox"
            onChange={event => inputChangeHandler({ name }, event)}
            id={name}
            value={value}
            required={required}
            name={name}
            type="checkbox"
          />
          <span className="checkbox__checkmark" /> {props.children}
        </label>
      </div>
    );
};

export default FormCheckbox;