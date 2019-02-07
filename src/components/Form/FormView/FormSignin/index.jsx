import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';

const initialSigninValues = {
    values: {
      email: "",
      password: ""
    },
    errors: {
      email: "",
      password: "",
    },
    touched: {
      email: false,
      password: false
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

const FormSignin = () => {
  return (
    <FormHandler initialFormValues={initialSigninValues}>
      {(renderProps) => (
          <FormPattern 
            onSubmitFunction={_fakeSubmitLoading}
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignin;