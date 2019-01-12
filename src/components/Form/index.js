import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSwitch: true,
            formsData: {}
        };
    }

    handleInputChange = (id, element, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const thisFormsData = this.state.formsData;

        this.setState({
            formsData: {
                ...thisFormsData,
                [id]: {
                    ...thisFormsData[id],
                    [element.name]: value
                }
            }
        }, () => { console.table(this.state.formsData); });
    }  

    validEmail = () => {
        
    }

    validPassword = (func) => {
        
    }

    getFormElementValue = (id, name) => {
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
                    getFormElementValue={this.getFormElementValue}
                    togglePopupForms={this.togglePopupForms}
                />  || <FormSignin 
                    formID="signin"
                    handleInputChange={this.handleInputChange}
                    getFormElementValue={this.getFormElementValue}
                    togglePopupForms={this.togglePopupForms}
                />}
            </div>
        );
    }
};

export default Form;