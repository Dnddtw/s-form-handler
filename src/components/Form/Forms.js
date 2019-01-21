import React from 'react';
import Loader from '../Loader';
import { 
    FormTitle, 
    InputEmail, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    FormTermOfUse,
    InputPasswordWithLink,
		FormSelect } from './FormComponents';
		
function _getInputProps(props) {
	const { formID, handleInputChange, value, ifError, getFormElementValues  } = props;
	return ({
		formID, 
		handleInputChange, 
		getFormElementValues,
		value, 
		ifError
	});
}

const FormSignin = (props) => {
		const { formID, togglePopupForms, submitResponse = true, toggleValidAvailable } = props;	
		const inputComponentProps = _getInputProps(props);

    return (
        <div className="form form__container">
            <form className="form__sign-in" onSubmit={(event) => toggleValidAvailable(formID, event)}>
                <fieldset disabled={submitResponse}>
                    <FormTitle>Вход в систему</FormTitle>    
										<InputEmail 
												{...inputComponentProps}
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPasswordWithLink
												{...inputComponentProps}
                        name="password"> 
                        Пароль
                    </InputPasswordWithLink>

                    <FormSubmitButton formID={formID}> Войти </FormSubmitButton>
                    <FormAdditional togglePopupForms={togglePopupForms}>Зарегистрироваться</FormAdditional> 

                    {submitResponse && <Loader />}   
                </fieldset>   
            </form>
        </div>
    );
};

const FormSignup = (props) => {
	const { formID, togglePopupForms, submitResponse = true, toggleValidAvailable } = props;
	const inputComponentProps = _getInputProps(props);

    return (
        <div className="form form__container">
            <form className="form__sign-up" onSubmit={(event) => toggleValidAvailable(formID, event)}>
                <fieldset disabled={submitResponse}>
                    <FormTitle>Регистрация в системе</FormTitle> 
                    <InputEmail 
												{...inputComponentProps}
												required="required"
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPassword
												{...inputComponentProps}
                        required="required"
                        name="password">
                        Пароль
                    </InputPassword>

                    <InputPassword
												{...inputComponentProps}
                        required="required"
                        name="repeatPassword">
                        Повторите пароль
                    </InputPassword>

                    <FormSelect
												{...inputComponentProps}
                        required="required"
                        name="citizenship">
                        Гражданство
                    </FormSelect>

                    <FormTermOfUse
												{...inputComponentProps}
                        required="required"
                        name="termOfUse">
                        Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a>
                    </FormTermOfUse>

                    <FormSubmitButton formID={formID}> Зарегистрироваться </FormSubmitButton>
                    <FormAdditional togglePopupForms={togglePopupForms}>Войти</FormAdditional>
                    
                    {submitResponse && <Loader />}
                </fieldset>
            </form>
        </div>
    );
};

export { FormSignin, FormSignup };