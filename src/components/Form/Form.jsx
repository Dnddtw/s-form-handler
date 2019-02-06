import React, { Component, Fragment } from 'react';
import validHandler from "./InputValidFunctions";

class Form extends Component {
  state = {
    ...this.props.initialFormValues,
    submitResponse: false,
    isValidAvailable: false
  };

  _handleInputChange (element, event) {
    const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { isValidAvailable } = this.state;
		
    const name = element.name;
    const error = isValidAvailable ? validHandler(name, value) : "";

    this.setState({
        [name]: {
          value,
          error
        }
    }, () => { validHandler(name, value); });
  };

  _toggleValidAvailable (event) {
    // It allows check the inputs changes in real time, when user clicked on submit button
    event.preventDefault();
    this.setState({
        isValidAvailable: true
    });
  };

  _gatherTheProps = () => {
    console.log(this.props.initialFormValues);
    return ({
      functions: {
        handleInputChange: this._handleInputChange,
        toggleValidAvailable: this._toggleValidAvailable
      },
      properties: { ...this.props.initialFormValues }
    });
  } 

  render() {
    const formProperties = this._gatherTheProps();

    console.log(this.props.render);
    return (
      <Fragment>
        {this.props.children(formProperties)}
      </Fragment>
    );
  }
};

export default Form;