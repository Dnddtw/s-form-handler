import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';
import { validEmail, validPassword, fieldRequired } from '../../FormHandler/InputValidFunctions';

const initialSignupValues = {
  values: {
    email: "ya@ya.ru",
  }
};

function _fakeSubmitLoading (values, fn) {
  console.log(values);
  fn(true);
  setTimeout(() => {
    fn(false);
  }, 1000);
};

const validateScheme = {
  email: [validEmail, fieldRequired],
  password: [validPassword, fieldRequired],
  repeatPassword: [fieldRequired],
  citizenship: [fieldRequired]
};

const FormSignup = () => {
  return (
    <FormHandler 
      validateScheme={validateScheme}
      onSubmitFunction={_fakeSubmitLoading}
      initialFormValues={initialSignupValues}>
      {(renderProps) => (
          <FormPattern 
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignup;