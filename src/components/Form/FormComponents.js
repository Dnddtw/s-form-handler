import React from "react";
import PropTypes from 'prop-types';

const FormLabel = props => {
  return (
    <label htmlFor={`${props.name}`} className="form__label"> {props.children} </label>
  );
};

const InputInvalidText = props => {
  return <p className="form__invalid"> {props.children} </p>;
};

function _getElementValues(props) {
  // The function gets properties from Form parent and resolve it with form components
  const {
    formID,
    name,
    required = false,
    handleInputChange,
    getFormElementValues
  } = props;

  const formElementData = getFormElementValues(formID, name);
  const value = formElementData.value;
  const ifError = formElementData.valueInvalid;

  const forName = `${formID}-${name}`;

  return {
    formID,
    name,
    required,
    handleInputChange,
    value,
    ifError,
    forName
  };
}

export const InputEmail = props => {
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
        type="text"
        onChange={event => handleInputChange(formID, { name }, event)}
        className={`form__input ${ifError ? "invalid" : ""}`}
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
      <div className="select-container">
        <select
          name={name}
          id={forName}
          className="form__select"
          required={required}
          onChange={event => handleInputChange(formID, { name }, event)}
          value={value}
        >
          <option value="1111">1111</option>
          <option value="2222">2222</option>
          <option value="3333">3333</option>
        </select>
      </div>
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
	formID: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	getFormElementValues: PropTypes.func.isRequired,
	required: PropTypes.string
}

InputEmail.propTypes = { ...InputPropTypes };
InputPassword.propTypes = { ...InputPropTypes };
InputPasswordWithLink.propTypes = { ...InputPropTypes };
FormSelect.propTypes = { ...InputPropTypes };
FormTermOfUse.propTypes = { ...InputPropTypes };

FormSubmitButton.propTypes = {
	formID: PropTypes.string.isRequired
};

FormAdditional.propTypes = {
	togglePopupForms: PropTypes.func.isRequired
};