import React from 'react';

const FormSubmitButton = props => {
    return (
      <button
        type="submit"
        className="form__submit">
        {props.children}
      </button>
    );
};

export default FormSubmitButton;