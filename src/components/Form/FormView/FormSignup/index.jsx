import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';

const initialSignupValues = {
  values: {
    email: "ya@ya.ru",
    password: "",
    repeatPassword: "",
    citizenship: "",
    termOfUse: ""
  },
  errors: {
    email: "",
    password: "",
    repeatPassword: "",
    citizenship: "",
    termOfUse: ""
  },
  touched: {
    email: false,
    password: false,
    repeatPassword: false,
    citizenship: false
  }
};

function _fakeSubmitLoading () {
  const { errors } = this.state;
  
  const canIChangeSubmitResponseState = Object.keys(errors).filter((element) => {
    return errors[element];
  });

  if (canIChangeSubmitResponseState.length === 0) {
    this.setState({ submitResponse: true },
      () => {
        setTimeout(() => {
          this.setState({
            submitResponse: false
          });
        }, 10000);
      }
    );
  }
};

const FormSignup = () => {
  return (
    <FormHandler 
      initialFormValues={initialSignupValues}>
      {(renderProps) => (
          <FormPattern 
            onSubmitFunction={_fakeSubmitLoading}
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignup;