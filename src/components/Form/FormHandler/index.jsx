import React, { Component, Fragment } from 'react';
import validHandler from "./InputValidFunctions";

class FormHandler extends Component {
  state = {
    ...this.props.initialFormValues,
    submitResponse: false,
    isValidAvailable: false
  };

  validateScheme = this.props.validateScheme || "";

  _handleInputChange = (element, event) => {
    const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { isValidAvailable } = this.state;
		
    const { name } = element;
    const error = isValidAvailable ? validHandler(name, value, this.validateScheme) : "";

    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value },
      touched: { ...prevState.touched, [name]: true },
      errors: { ...prevState.errors, [name]: error }
    }));
  };

  _onSubmitFormHandler = (fn, event) => {
    event.preventDefault();

    if (typeof fn !== "function") {
      throw Error('The callback of onSubmitFormHandler is not function');
    }

    // The function replaces inputInvalid message (erros)
    const errors = Object.assign({}, this.state.errors);
    const values = this.state.values;

    for (let key in errors) {
      errors[key] = validHandler(key, values[key], this.validateScheme);
    }

    this.setState({
      isValidAvailable: true, 
      errors
    }, () => { fn.call(this) });
  };

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
    return ({
      functions: {
        handleInputChange: this._handleInputChange,
        onSubmitFormHandler: this._onSubmitFormHandler
      },
      properties: { ...this.state }
    });
  } 

  render() {
    const formProperties = this._gatherTheProps();
    return (
      <Fragment>
        {this.props.children(formProperties)}
      </Fragment>
    );
  }
};

export default FormHandler;