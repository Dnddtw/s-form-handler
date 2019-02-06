import React, { Component, Fragment } from 'react';
import FormPropTypes from './FormPropTypes';
// import Loader from "../Loader";
import validHandler from "./InputValidFunctions";

class FormTest extends Component {
  state = {};

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

  

  _gatherTheProps = () => {
    return ({
      _validHandler: this._validHandler,
      _handleInputChange: this._handleInputChange,
      _toggleValidAvailable: this._toggleValidAvailable
    });
  } 

  render() {
    console.log(this._gatherTheProps());
    return (
      <Fragment>
        {this.props.render(this._gatherTheProps())}
      </Fragment>
    );
  }
};

// FormTest.propTypes = { ...FormPropTypes };
export default FormTest;