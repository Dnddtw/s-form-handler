import React, { Component } from 'react';
import { object, func } from 'prop-types';

import validHandler from "./InputValidFunctions";

class FormHandler extends Component {
  state = {
    values: {
      ...this.props.initialFormValues.values,
    },
    errors: {},
    touched: {},
    submitResponse: false,
    isValidAvailable: false
  };

  _handleInputChange = (event) => {
    const { isValidAvailable } = this.state;
    const { validateScheme } = this.props;
    const target = typeof event === "string" ? "country" : event.target;
    const value = target === "country" 
      ? event 
      : target.type === "checkbox" 
        ? target.checked 
        : target.value;
		
    const name = typeof target === "object" ? event.target.name : "citizenship" ;
    const error = isValidAvailable ? validHandler(value, validateScheme[name]) : "";

    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value },
      touched: { ...prevState.touched, [name]: true },
      errors: { ...prevState.errors, [name]: error }
    }));
  };

  _onSubmitFormHandler = (event) => {
    event.preventDefault();

    // The function replaces inputInvalid message (erros)
    const { validateScheme } = this.props;
    const errors = Object.assign({}, this.state.errors);
    const values = this.state.values;

    for (let key in validateScheme) {
      const v = values[key] || '';
      errors[key] = validHandler(v, validateScheme[key]);
    }

    this.setState({
      isValidAvailable: true, 
      errors
    }, () => { 
      const { errors } = this.state;
      const canIChangeSubmitResponseState = Object.keys(errors).filter((element) => {
        return errors[element];
      });

      if (canIChangeSubmitResponseState.length === 0) {
        this.props.onSubmitFunction(this.state.values, this._setSubmitResponse);
      }
    });
  };

  _setSubmitResponse = (submitResponse = false) => {
    this.setState({ submitResponse })
  }

  _gatherTheProps = () => {
    const { values, errors, submitResponse } = this.state;
    const properties = { values, errors, submitResponse };
    return ({
      functions: {
        handleInputChange: this._handleInputChange,
        onSubmitFormHandler: this._onSubmitFormHandler
      },
      properties
    });
  } 

  render() {
    const formProperties = this._gatherTheProps();
    return (
      <>
        {this.props.children(formProperties)}
      </>
    );
  }
};

FormHandler.propTypes = {
  validateScheme: object,
  initialFormValues: object,
  onSubmitFunction: func,
};

FormHandler.defaultProps = {
  initialFormValues: {},
  validateScheme: {},
  submitResponse: false,
  isValidAvailable: false,
  onSubmitFunction: () => {},
};

export default FormHandler;