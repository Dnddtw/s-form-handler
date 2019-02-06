import React, { Component, Fragment } from 'react';
import validHandler from "./InputValidFunctions";

class Form extends Component {
  state = {
    ...this.props.initialFormValues,
    submitResponse: false,
    isValidAvailable: false
  };

  _handleInputChange = (element, event) => {
    const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { isValidAvailable } = this.state;
		
    const name = element.name;
    const error = isValidAvailable ? validHandler(name, value) : "";

    this.setState({
      [name]: { value, error }
    });
  };

  _toggleValidAvailable = (event) => {
    // It allows check the inputs changes in real time, when user clicked on submit button
    event.preventDefault();
    this.setState({
        isValidAvailable: true
    }, () => { this._onSubmitValidThisForm() });
  };

  _onSubmitValidThisForm = () => {
    // The function replaces inputInvalid message (erros)
    const state = this.state;

    // It makes a new object with updated inputInvalid (errors)
    Object.entries(state).forEach(([name, element]) => {
      console.log(typeof element);
      if (typeof element !== "object") { return; }
      // if (name === "isValidAvailable") {
      //   validedData[name] = element;
      // } else {
        element.error = validHandler(name, element.value);
        // Object.assign(validedData, { [name]: element });
      // }
    });

    // It replaces previous formsData[id] with new
    // this.setState(
    //   {
    //     formsData: {
    //       ...formsData,
    //       [id]: validedData
    //     }
    //   }, () => { this.fakeSubmitLoading(id); });
  };

  _fakeSubmitLoading = () => {
    const state = this.state;
    const canIChangeSubmitResponseState = Object.entries(state).filter((stateEntry) => {
        if (typeof stateEntry !== "object") { return false; }
        return stateEntry.error;
      }
    );

    if (canIChangeSubmitResponseState.length === 0) {
      this.setState({ submitResponse: true },
        () => {
          setTimeout(() => {
            this.setState({
              submitResponse: false
            });
          }, 2500);
        }
      );
    }
  };

  _gatherTheProps = () => {
    return ({
      functions: {
        handleInputChange: this._handleInputChange,
        toggleValidAvailable: this._toggleValidAvailable
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

export default Form;