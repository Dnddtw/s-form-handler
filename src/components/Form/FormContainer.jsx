import React, { Component } from "react";
import FormSignup from "./FormSignup";
import FormSignin from "./FormSignin";
import Form from ".";

class FormContainer extends Component {
  render() {
    const { formSwitch } = this.state;
    const showForm = formSwitch
      ? (<Form initialFormValues={initialSignupValues}>
          {
            (renderProps) => (
              <FormSignup 
                {...renderProps} />
            )
          }
        </Form>)
      : (<Form initialFormValues={initialSigninValues}>
          {
            (renderProps) => (
              <FormSignin 
                {...renderProps} />
            )
          }
        </Form>);
    return (
      <div className="wrapper">{showForm}</div>
    );
  }
}

export default FormContainer;
