import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSwitch: true,
            signup: {},
            signin: {}
        };
    }

    handleInputChange = (id, element, event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [id]: {
                ...this.state[id],
                [element.name]: value
            }
        }, () => { console.table(this.state); });
    }  
    
    getFormElementValue = (id, name) => {
        const formData = this.state[id];
        const test = formData.hasOwnProperty(name) ? formData[name] : '';
        return test;
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