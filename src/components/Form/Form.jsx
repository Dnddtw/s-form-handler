import React, { Component, Fragment } from 'react';
import validHandler from "./InputValidFunctions";

class FormTest extends Component {
  state = {};

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
    return ({
      validHandler,
      _handleInputChange: this._handleInputChange,
      _toggleValidAvailable: this._toggleValidAvailable
    });
  } 

  render() {
    return (
      <Fragment>
        {this.props.render(this._gatherTheProps())}
      </Fragment>
    );
  }
};

export default FormTest;