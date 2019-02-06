import React from "react";
import { string, func } from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';

const FormLabel = props => {
  return (
    <label htmlFor={`${props.name}`} className="form__label"> {props.children} </label>
  );
};

const InputInvalidText = props => {
  return <p className="form__invalid"> {props.children} </p>;
};

const _getInputProps = (props) => {
  const {
    inputChangeHandler,
    required = false,
    name,
    formName,
    elementValues: { value, error }
  } = props;
  
  const forName = `${formName}-${name}`;
	
  return {
    inputChangeHandler,
    name,
    required,
    forName,
    error,
    value
  };
}

export const InputEmail = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    error,
    forName
  } = _getInputProps(props);

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <input
        type="text"
        onChange={event => inputChangeHandler({ name }, event)}
        className={`form__input ${error ? "invalid" : ""}`}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        value={value}
      />
      {error && <InputInvalidText>{error}</InputInvalidText>}
    </div>
  );
};

export const InputPassword = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    error,
    forName
  } = _getInputProps(props);

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <input
        type="password"
        className={`form__input ${error ? "invalid" : ""}`}
        onChange={event => inputChangeHandler({ name }, event)}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        value={value}
      />
      {error && <InputInvalidText>{error}</InputInvalidText>}
    </div>
  );
};

export const InputPasswordWithLink = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    error,
    forName
  } = _getInputProps(props);

  return (
    <div className="form__element">
      <div className="form__flex">
        <FormLabel name={forName}> {props.children} </FormLabel>
        <a href="#" className="form__link">
          Забыли пароль?
        </a>
      </div>
      <input
        type="password"
        className={`form__input ${error ? "invalid" : ""}`}
        onChange={event => inputChangeHandler({ name }, event)}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        value={value}
      />
      {error && <InputInvalidText>{error}</InputInvalidText>}
    </div>
  );
};

export const FormTitle = props => {
  return <h1 className="form__title"> {props.children} </h1>;
};

export const FormSubmitButton = props => {
  return (
    <div>
      <button
        type="submit"
        className="form__submit">
        {props.children}
      </button>
    </div>
  );
};

export const FormAdditional = props => {
  const { togglePopupForms } = props;

  return (
    <div className="popup__additional">
      <button className="popup__link" onClick={togglePopupForms}> {props.children} </button>
    </div>
  );
};

export const FormSelect = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    error,
    forName
  } = _getInputProps(props);

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <ReactFlagsSelect 
        className="form__select form-select"
        onChange={event => inputChangeHandler({name}, event)}
        id={name}
        defaultCountry="UA"
      />
    </div>
  );
};

export const FormTermOfUse = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    forName
  } = _getInputProps(props);

  return (
    <div className="form__element checkbox">
      <label htmlFor={forName} className="checkbox__label">
        <input
          type="checkbox"
          name={name}
          required={required}
          id={forName}
          autoComplete="off"
          className="checkbox__checkbox"
          onChange={event => inputChangeHandler({ name }, event)}
          value={value}
        />
        <span className="checkbox__checkmark" /> {props.children}
      </label>
    </div>
  );
};

const InputPropTypes = {
	name: string.isRequired,
	handleInputChange: func.isRequired,
	getFormElementValues: func.isRequired,
	required: string
}

// InputEmail.propTypes = { ...InputPropTypes };
// InputPassword.propTypes = { ...InputPropTypes };
// InputPasswordWithLink.propTypes = { ...InputPropTypes };
// FormSelect.propTypes = { ...InputPropTypes };
// FormTermOfUse.propTypes = { ...InputPropTypes };

FormSubmitButton.propTypes = {
	// formID: string.isRequired
};

FormAdditional.propTypes = {
	// togglePopupForms: func.isRequired
};