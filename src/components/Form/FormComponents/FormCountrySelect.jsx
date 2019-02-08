import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

import FormLabel from './FormLabel';
import InvalidInfo from './InvalidInfo';

const FormCountrySelect = props => {
    const {
      name,
      inputChangeHandler,
      error,
    } = props;
  
    return (
      <div className="form__element">
        <FormLabel name={name}>{props.children}</FormLabel>
        <ReactFlagsSelect 
          className="form__select form-select"
          onChange={event => inputChangeHandler({name}, event)}
          id={name}
          defaultCountry="UA"
        />
        {error && <InvalidInfo error />}
      </div>
    );
};

export default FormCountrySelect;