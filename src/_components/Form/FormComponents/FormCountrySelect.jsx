import React from 'react';
import { string, func, any } from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';

import FormLabel from './FormLabel';
import InvalidInfo from './InvalidInfo';

const FormCountrySelect = props => {
    const {
      name,
      inputChangeHandler,
      placeholder,
      error,
    } = props;
  
    return (
      <div className="form__element">
        <FormLabel name={name}>{props.children}</FormLabel>
        <ReactFlagsSelect 
          className={`form__select form-select ${error ? "invalid" : ""}`}
          onSelect={inputChangeHandler}
          id={name}
          placeholder={placeholder}
        />
        {error && <InvalidInfo>{error}</InvalidInfo>}
      </div>
    );
};

FormCountrySelect.propTypes = {
  name: string,
  inputChangeHandler: func.isRequired,
  placeholder: string,
  error: any
};

FormCountrySelect.defaultProps = {
  error: "",
  name: "citizenship",
  placeholder: ""
};

export default FormCountrySelect;