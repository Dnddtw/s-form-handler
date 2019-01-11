import React, { Component } from 'react';
import { FormSignin, FormSignup } from './Forms';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    inputHandler = (id, element, event) => {
        this.setState({
            [id]: {
                ...this.state[id],
                [element.name]: event.target.value
            }
        }, () => { console.log(this.state); });
    }

    render() {
        return (
            <div className="wrapper">
                {/* <FormSignup 
                    formID="signup" 
                    inputHandler={this.inputHandler}
                /> */}

                <FormSignin 
                    formID="signin"
                    inputHandler={this.inputHandler}
                />
            </div>
        );
    }
};

export default Form;