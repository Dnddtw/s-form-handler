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

export const _getInputProps = (props) => {
  const {
    formID,
    handleInputChange,
    value,
    ifError,
    getFormElementValues
	} = props;
	
  return {
    formID,
    handleInputChange,
    getFormElementValues,
    value,
    ifError
  };
}

function _getElementValues(props) {
  // The function gets properties from Form parent and resolve it with form components
  const {
    name,
    value,
    required = false,
    inputChangeHandler
  } = props;

  const formElementData = getFormElementValues(formID, name);
  const value = formElementData.value;
  const ifError = formElementData.valueInvalid;

  // const forName = `${formID}-${name}`;
  const forName = `${name}`;

  return {
    name,
    required,
    inputChangeHandler,
    value,
    ifError,
    forName
  };
}

export const InputEmail = props => {
  const {
    name,
    required,
    inputChangeHandler,
    value,
    ifError,
    forName
  } = _getElementValues(props);

  const ifError = false;

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <input
        type="text"
        onChange={event => inputChangeHandler({ name }, event)}
        className={`form__input ${ifError ? "invalid" : ""}`}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        // value={value}
      />
      {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
    </div>
  );
};

export const InputPassword = props => {
  const {
    formID,
    name,
    required,
    handleInputChange,
    value,
    ifError,
    forName
  } = _getElementValues(props);

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <input
        type="password"
        className={`form__input ${ifError ? "invalid" : ""}`}
        onChange={event => handleInputChange(formID, { name }, event)}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        value={value}
      />
      {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
    </div>
  );
};

export const InputPasswordWithLink = props => {
  const {
    formID,
    name,
    required,
    handleInputChange,
    value,
    ifError,
    forName
  } = _getElementValues(props);

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
        className={`form__input ${ifError ? "invalid" : ""}`}
        onChange={event => handleInputChange(formID, { name }, event)}
        id={forName}
        required={required}
        autoComplete="off"
        name={name}
        value={value}
      />
      {ifError && <InputInvalidText>{ifError}</InputInvalidText>}
    </div>
  );
};

export const FormTitle = props => {
  return <h1 className="form__title">{props.children}</h1>;
};

export const FormSubmitButton = props => {
  const { formID } = props;

  return (
    <div>
      <button
        type="submit"
        className="form__submit"
      >
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
    formID,
    name,
    required,
    handleInputChange,
    value,
    forName
  } = _getElementValues(props);

  return (
    <div className="form__element">
      <FormLabel name={forName}> {props.children} </FormLabel>
      <ReactFlagsSelect 
        className="form__select form-select"
        defaultCountry="UA"
      />
    </div>
  );
};

export const FormTermOfUse = props => {
  const {
    formID,
    name,
    required,
    handleInputChange,
    value,
    forName
  } = _getElementValues(props);

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
          onChange={event => handleInputChange(formID, { name }, event)}
          value={value}
        />
        <span className="checkbox__checkmark" /> {props.children}
      </label>
    </div>
  );
};

const InputPropTypes = {
	formID: string.isRequired,
	name: string.isRequired,
	handleInputChange: func.isRequired,
	getFormElementValues: func.isRequired,
	required: string
}

InputEmail.propTypes = { ...InputPropTypes };
InputPassword.propTypes = { ...InputPropTypes };
InputPasswordWithLink.propTypes = { ...InputPropTypes };
FormSelect.propTypes = { ...InputPropTypes };
FormTermOfUse.propTypes = { ...InputPropTypes };

FormSubmitButton.propTypes = {
	formID: string.isRequired
};

FormAdditional.propTypes = {
	togglePopupForms: func.isRequired
};