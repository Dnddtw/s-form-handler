import React, { Component } from "react";
import FormSignup from "./FormSignup";
import FormSignin from "./FormSignin";
import Form from "./Form";

class FormContainer extends Component {
  state = {
    formSwitch: true,
    // formsData: {
    //   signin: {
    //     isValidAvailable: false,
    //     email: { value: "", valueInvalid: "" },
    //     password: { value: "", valueInvalid: "" }
    //   },
    // }
  };

  // toggleValidAvailable = (event) => {
  //   // It allows check the inputs changes in real time, when user clicked on submit button
  //   event.preventDefault();
  //   this.setState({
  //       isValidAvailable: true
  //     }, () => { this.onSubmitValidThisForm(); });
  // };

  // onSubmitValidThisForm = () => {
  //   // The function replaces inputInvalid message (erros)
  //   const state = this.state;

  //   // It makes a new object with updated inputInvalid (errors)
  //   Object.entries(state).forEach((stateProp) => {
  //     if (typeof stateProp != "object") { return; }
  //     // [name, element]
  //     if (name === "isValidAvailable") {
  //       validedData[name] = element;
  //     } else {
  //       element.error = this._validHandler(name, element.value);
  //       Object.assign(validedData, { [name]: element });
  //     }
  //   });

  //   // It replaces previous formsData[id] with new
  //   this.setState(
  //     {
  //       formsData: {
  //         ...formsData,
  //         [id]: validedData
  //       }
  //     }, () => { this.fakeSubmitLoading(id); });
  // };

  // fakeSubmitLoading = id => {
  //   const formData = this.state.formsData[id];

  //   const canIChangeSubmitResponseState = Object.entries(formData).filter(
  //     ([name, element]) => {
  //       if (typeof element !== "object" || name === "citizenship") { return false; }

  //       return element.valueInvalid;
  //     }
  //   );

  //   if (canIChangeSubmitResponseState.length === 0) {
  //     this.setState({ submitResponse: true },
  //       () => {
  //         setTimeout(() => {
  //           this.setState({
  //             submitResponse: false
  //           });
  //         }, 2500);
  //       }
  //     );
  //   }
  // };

  _togglePopupForms = event => {
    // It changes the Signin and Signup popups
    event.preventDefault();
    this.setState({
      formSwitch: !this.state.formSwitch
    });
  };

  render() {
    const { formSwitch } = this.state;
    const showForm = formSwitch
      ? <Form render={(theProps) => (<FormSignup togglePopupForms={this._togglePopupForms} {...theProps} />)} />
      : <Form render={(theProps) => (<FormSignin togglePopupForms={this._togglePopupForms} {...theProps} />)} />
    return (
      <div className="wrapper">{showForm}</div>
    );
  }
}

export default Form;
