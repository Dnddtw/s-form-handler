import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';
import { validEmail, validPassword, fieldRequired } from '../../FormHandler/InputValidFunctions';

const initialSigninValues = {
  values: {
    email: "",
    password: ""
  }
};

function _fakeSubmitLoading (fn) {
  fn(true);
  setTimeout(() => {
    fn(false);
  }, 1000);
};

const validateScheme = {
  email: [validEmail, fieldRequired],
  password: [validPassword, fieldRequired]
};

const FormSignin = () => {
  return (
    <FormHandler 
      validateScheme={validateScheme}
      initialFormValues={initialSigninValues}
      onSubmitFunction={_fakeSubmitLoading}
    >
      {(renderProps) => (
          <FormPattern 
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignin;