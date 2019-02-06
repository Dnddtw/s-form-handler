import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';

const initialSignupValues = {
  email: { value: "", error: "", touched: false },
  password: { value: "", error: "", touched: false },
  repeatPassword: { value: "", error: "", touched: false },
  citizenship: { value: "", error: "", touched: false },
  termOfUse: { value: false, error: "", touched: false }
};

const FormSignup = () => {
  return (
    <FormHandler initialFormValues={initialSignupValues}>
      {(renderProps) => (
          <FormPattern 
            formURL="/login"
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignup;