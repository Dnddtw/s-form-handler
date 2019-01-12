import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';
import errorMessage from '../../text/text.json';

Object.fromEntries = (array) => {
    Object.assign({}, ...Array.from(array, ([k, v]) => ({[k]: v}) ));
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSwitch: true,
            formsData: {
                signin: {
                    email: {value: "", valueInvalid: ""},
                    password: {value: "", valueInvalid: ""}   
                },
                signup: {
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

        console.log(" HAANDLER");
        console.log(formData);
        console.log(" HAANDLER");

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
        }, () => { });

    }  

    toggleValidAvailable = (id, event) => {
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
        }, () => { console.table(this.state.formsData[id]); this.onSubmitValidThisForm(id) });
    }

    onSubmitValidThisForm = (id) => {
        const formsData = this.state.formsData;
        const formData = formsData[id];
        const validedData = {};
        
        Object.entries(formData).forEach(([name, element]) => {
            if (name == 'isValidAvailable') {
                validedData[name] = element;
            } else {
                element.valueInvalid = this.validHandler(name, element.value);
                Object.assign(validedData, { [name]: element });
            }
        });

        this.setState({
            formsData: {
                ...formsData,
                [id]: validedData
            }
        }, () => { console.log( formsData ) });
    }

    validHandler = (name, value) => {
        switch(name) {
            case "email":
                return this.validEmail(value);
            case "password":
            default:
                return this.validPassword(value);
        }
    }

    validEmail = (value) => {
        const emailValidRegExp = /\S+@\S+\.\S+/;

        if (value.length === 0) {
            return errorMessage.email.empty;
        } else if (!emailValidRegExp.test(value)) {
            return errorMessage.email.invalid;
        }

        return '';
    }

    validPassword = (value) => {
        return value.length === 0 ? errorMessage.password.empty : '';
    }

    getFormElementValues = (id, name) => {
        const formData = this.state.formsData[id] ? this.state.formsData[id] : {};
        return formData.hasOwnProperty(name) ? formData[name] : '';
    }

    togglePopupForms = (event) => {
        event.preventDefault();

        this.setState({
            formSwitch: !this.state.formSwitch
        });
    }

    render() {
        const { formSwitch } = this.state;

        return (
            <div className="wrapper">
                {formSwitch &&  <FormSignup 
                    formID="signup" 
                    handleInputChange={this.handleInputChange}
                    getFormElementValues={this.getFormElementValues}
                    togglePopupForms={this.togglePopupForms}
                    toggleValidAvailable={this.toggleValidAvailable}
                />  || <FormSignin 
                    formID="signin"
                    handleInputChange={this.handleInputChange}
                    getFormElementValues={this.getFormElementValues}
                    togglePopupForms={this.togglePopupForms}
                    toggleValidAvailable={this.toggleValidAvailable}
                />}
            </div>
        );
    }
};

export default Form;