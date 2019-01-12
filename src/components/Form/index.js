import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';
import errorMessage from '../../text/text.json';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitResponse: false,
            formSwitch: true,
            formsData: {
                signin: {
                    isValidAvailable: false,
                    email: {value: "", valueInvalid: ""},
                    password: {value: "", valueInvalid: ""}   
                },
                signup: {
                    isValidAvailable: false,
                    email: { value: "", valueInvalid: ""} ,
                    password: { value: "", valueInvalid: ""} ,
                    repeatPassword: { value: "", valueInvalid: "" },
                    citizenship: {value: "", valueInvalid: ""},
                    termOfUse: {value: false, valueInvalid: ""}
                }
            }
        };
    }

    handleInputChange = (id, element, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const thisFormsData = this.state.formsData;
        const formData = thisFormsData[id];
        const { isValidAvailable } = formData;
        const name = element.name;
        const valueInvalid = isValidAvailable ? this.validHandler(name, value) : '';
    
        this.setState({
            ...this.state,
            formsData: {
                ...thisFormsData,
                [id]: {
                    ...formData,
                    [element.name]: {
                        value: value,
                        valueInvalid: valueInvalid
                    }
                }
            }
        });
    }  

    toggleValidAvailable = (id, event) => {
        // It allows check the inputs changes in real time, when user clicked on submit button
        event.preventDefault();
        const thisFormsData = this.state.formsData;

        this.setState({
            formsData: {
                ...thisFormsData,
                [id]: {
                    ...thisFormsData[id],
                    isValidAvailable: true
                }
            }
        }, () => { this.onSubmitValidThisForm(id) });
    }

    onSubmitValidThisForm = (id) => {
        // The function replaces inputInvalid message (erros)
        const formsData = this.state.formsData;
        const formData = formsData[id];
        const validedData = {};
        
        // It makes a new object with updated inputInvalid (errors)
        Object.entries(formData).forEach(([name, element]) => {
            if (name === 'isValidAvailable') {
                validedData[name] = element;
            } else {
                element.valueInvalid = this.validHandler(name, element.value);
                Object.assign(validedData, { [name]: element });
            }
        });

        // It replaces previous formsData[id] with new
        this.setState({
            formsData: {
                ...formsData,
                [id]: validedData
            }
        }, () => {this.fakeSubmitLoading(id)});
    }

    fakeSubmitLoading = (id) => {
        const formData = this.state.formsData[id];

        const canIChangeSubmitResponseState = Object.entries(formData).filter(([name, element]) => {
            if (name === 'isValidAvailable') {
                return false;
            } 

            return element.valueInvalid;
        });

        if (canIChangeSubmitResponseState.length === 0) {
            this.setState({
                submitResponse: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        submitResponse: false
                    });
                }, 2500);
            });
        }
    }

    validHandler = (name, value) => {
        // General valid handler
        switch(name) {
            case "email":
                return this.validEmail(value);
            case "password":
            default:
                return this.validPassword(value);
        }
    }

    validEmail = (value) => {
        // Valid function
        const emailValidRegExp = /\S+@\S+\.\S+/;

        if (value.length === 0) {
            return errorMessage.email.empty;
        } else if (!emailValidRegExp.test(value)) {
            return errorMessage.email.invalid;
        }

        return '';
    }

    validPassword = (value) => {
        // Valid function
        return value.length === 0 ? errorMessage.password.empty : '';
    }

    getFormElementValues = (id, name) => {
        // It transfers a value of input to functional component 
        const formData = this.state.formsData[id] ? this.state.formsData[id] : {};
        return formData.hasOwnProperty(name) ? formData[name] : '';
    }

    togglePopupForms = (event) => {
        // It changes the popups
        event.preventDefault();
        this.setState({
            formSwitch: !this.state.formSwitch
        });
    }

    render() {
        const { formSwitch, submitResponse } = this.state;

        return (
            <div className="wrapper">
                {formSwitch &&  <FormSignup 
                    formID="signup" 
                    handleInputChange={this.handleInputChange}
                    getFormElementValues={this.getFormElementValues}
                    togglePopupForms={this.togglePopupForms}
                    toggleValidAvailable={this.toggleValidAvailable}
                    submitResponse={submitResponse}
                />  || <FormSignin 
                    formID="signin"
                    handleInputChange={this.handleInputChange}
                    getFormElementValues={this.getFormElementValues}
                    togglePopupForms={this.togglePopupForms}
                    toggleValidAvailable={this.toggleValidAvailable}
                    submitResponse={submitResponse}
                />}
            </div>
        );
    }
};

export default Form;