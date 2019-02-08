import React from 'react';

const FormSubmitButton = props => {
    return (
      <div>
        <button
          type="submit"
          className="form__submit">
          {props.children}
        </button>
      </div>
    );
};

export default FormSubmitButton;