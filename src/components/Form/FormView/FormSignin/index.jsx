import React from 'react';
import FormPattern from './FormPattern';
import FormHandler from '../../FormHandler';

const initialSigninValues = {
    submitResponse: false,
    isValidAvailable: false,
    email: { value: "", error: "", touched: "" },
    password: { value: "", error: "", touched: "" }
};

const FormSignin = () => {
  return (
    <FormHandler initialFormValues={initialSigninValues}>
      {(renderProps) => (
          <FormPattern 
            formURL="/register"
            {...renderProps} />
      )}
    </FormHandler>
  );
};

export default FormSignin;