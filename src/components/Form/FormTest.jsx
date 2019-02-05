import React, { Component, Fragment } from 'react';
import FormPropTypes from './FormPropTypes';
import Loader from "../Loader";
import { validEmail, validPassword } from "./InputValidFunctions";

import FormSignup from "./FormSignup";

class FormTest extends Component {
  state = {
    submitResponse: false,
    isValidAvailable: false
  };

  _handleInputChange = (element, event) => {
    const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { isValidAvailable } = this.state;
		
    const name = element.name;
    const valueInvalid = isValidAvailable ? this._validHandler(name, value) : "";

    this.setState({
        ...this.state,
        [element.name]: {
          value: value,
          valueInvalid: valueInvalid
        }
    });
  };

  _toggleValidAvailable = (id, event) => {
    // It allows check the inputs changes in real time, when user clicked on submit button
    event.preventDefault();
    const thisFormsData = this.state.formsData;

    this.setState(
      {
        formsData: {
          ...thisFormsData,
          [id]: {
            ...thisFormsData[id],
            isValidAvailable: true
          }
        }
      }, () => { this.onSubmitValidThisForm(id); });
  };

  _validHandler (name, value) {
    // General valid handler
    switch (name) {
      case "email":
				return validEmail(value);
				
      case "password":
      default:
        return validPassword(value);
    }
  };

  _gatherTheProps = () => {
    return ({
      _validHandler: this._validHandler,
      _handleInputChange: this._handleInputChange
    });
  } 

  render() {
    const { submitResponse } = this.state;
    return (
      <Fragment>
        {this.props.render(this._gatherTheProps())}
      </Fragment>
    );
  }
};

// FormTest.propTypes = { ...FormPropTypes };
export default FormTest;