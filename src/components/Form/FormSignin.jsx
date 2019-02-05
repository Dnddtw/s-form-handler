import React from 'react';
import FormPropTypes from './FormPropTypes';
import Loader from "../Loader";
import {
  FormTitle,
  InputEmail,
  FormSubmitButton,
  FormAdditional,
	InputPasswordWithLink,
	_getInputProps
} from "./FormComponents";

const FormSignin = (props) => {
	const inputComponentProps = _getInputProps(props);
  const {
    formID,
    togglePopupForms,
    submitResponse = true,
    toggleValidAvailable
  } = props;

  return (
    <div className="form form__container">
      <form
        className="form__sign-in"
        onSubmit={event => toggleValidAvailable(formID, event)}
      >
        <fieldset disabled={submitResponse}>
          <FormTitle>Вход в систему</FormTitle>
          <InputEmail {...inputComponentProps} name="email">
            Электронная почта
          </InputEmail>

          <InputPasswordWithLink {...inputComponentProps} name="password">
            Пароль
          </InputPasswordWithLink>

          <FormSubmitButton formID={formID}> Войти </FormSubmitButton>
          <FormAdditional togglePopupForms={togglePopupForms}>
            Зарегистрироваться
          </FormAdditional>

          {submitResponse && <Loader />}
        </fieldset>
      </form>
    </div>
  );
};

FormSignin.propTypes = { ...FormPropTypes };
export default FormSignin;