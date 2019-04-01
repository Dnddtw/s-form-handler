import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';
import { validEmail, validPassword, fieldRequired } from '../../FormHandler/InputValidFunctions';

function _fakeSubmitLoading (values, fn) {
  console.log(values);
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