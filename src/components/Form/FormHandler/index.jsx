import React, { Component } from 'react';
import { object, func } from 'prop-types';

import validHandler from "./InputValidFunctions";

class FormHandler extends Component {
  validateScheme = this.props.validateScheme;
  onSubmitFunction = this.props.onSubmitFunction;

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
    const target = typeof event === "string" ? "country" : event.target;
    const value = target === "country" 
      ? event 
      : target.type === "checkbox" 
        ? target.checked 
        : target.value;
		
    const name = typeof target === "object" ? event.target.name : "citizenship" ;
    const error = isValidAvailable ? validHandler(value, this.validateScheme[name]) : "";

    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value },
      touched: { ...prevState.touched, [name]: true },
      errors: { ...prevState.errors, [name]: error }
    }));
  };

  _onSubmitFormHandler = (event) => {
    event.preventDefault();

    // The function replaces inputInvalid message (erros)
    const errors = Object.assign({}, this.state.errors);
    const values = this.state.values;

    for (let key in values) {
      errors[key] = validHandler(values[key], this.validateScheme[key]);
    }

    this.setState({
      isValidAvailable: true, 
      errors
    }, () => { 
      const { errors } = this.state;
      const canIChangeSubmitResponseState = Object.keys(errors).filter((element) => {
        return errors[element];
      });

      if (canIChangeSubmitResponseState) { this.onSubmitFunction(this._setSubmitResponse) } 
    });
  };

  _setSubmitResponse = (submitResponse = false) => {
    this.setState({ submitResponse })
  }

  // _fakeSubmitLoading = () => {
  //   const { errors } = this.state;
    
  //   const canIChangeSubmitResponseState = Object.keys(errors).filter((element) => {
  //     return errors[element];
  //   });

  //   if (canIChangeSubmitResponseState.length === 0) {
  //     this.setState({ submitResponse: true },
  //       () => {
  //         setTimeout(() => {
  //           this.setState({
  //             submitResponse: false
  //           });
  //         }, 10000);
  //       }
  //     );
  //   }
  // };

  _gatherTheProps = () => {
    const { values, errors } = this.state;
    const properties = { values, errors };
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
  initialFormValues: object.isRequired,
  onSubmitFunction: func.isRequired,
};

FormHandler.defaultProps = {
  validateScheme: {},
  submitResponse: false,
  isValidAvailable: false
};

export default FormHandler;