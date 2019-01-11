import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';

class Form extends Component {
    render() {
        return (
            <div className="wrapper">
                <FormSignup />
                {/* <FormSignin /> */}
            </div>
        );
    }
};

export default Form;