import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';
import errorMessage from '../../text/text.json';

Object.fromEntries = (array) => {
    Object.assign({}, ...Array.from(array, ([key, value]) => ({[key]: value}) ));
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
        const ifValidAvailable = thisFormsData[id] ? thisFormsData[id].isValidAvailable : '';
        const name = element.name;

        const valueInvalid = ifValidAvailable ? this.validHandler(name, value) : '';

    
        this.setState({
            formsData: {
                ...thisFormsData,
                [id]: {
                    ...thisFormsData[id],
                    [element.name]: {
                        value: value,
                        valueInvalid: valueInvalid
                    }
                }
            }
        }, () => { console.table( thisFormsData ) });

    }  

    toggleValidAvailable = (id, event) => {
        event.preventDefault();
        const thisFormsData = this.state.formsData;

        console.log('Worked');

        this.setState({
            formsData: {
                [id]: {
                    ...thisFormsData[id],
                    isValidAvailable: true
                }
            }
        }, () => { this.onSubmitValidThisForm(id) });
    }

    onSubmitValidThisForm = (id) => {
        const formsData = this.state.formsData;
        const formData = formsData[id];

        const entries = Object.entries(formData).filter(([name, element]) => {
            const test = (name === 'isValidAvailable') ? false : this.validHandler(name, element.value);
            return (name === 'isValidAvailable') ? false : this.validHandler(name, element.value);
        });

        const fromEntries = Object.fromEntries(entries);

        console.log(fromEntries);

        this.setState({
            formsData: {
                ...formData,
                [id]: fromEntries
            }
        });

        console.table(this.state);
    }

    validHandler = (name, value) => {
        switch(name) {
            case "email":
                console.log(`${name}: ${this.validEmail(value)}`)
                return this.validEmail(value);
            case "password":
            default:
                console.log(`${name}: ${this.validPassword(value)}`)
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
        
        // return value ? emailValidRegExp.test(value) ? '' : errorMessage.email.invalid : errorMessage.email.empty;
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