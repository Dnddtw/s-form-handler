import React from 'react';
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
          onSelect={event => inputChangeHandler({name}, event)}
          id={name}
          placeholder={placeholder}
        />
        {error && <InvalidInfo>{error}</InvalidInfo>}
      </div>
    );
};

export default FormCountrySelect;