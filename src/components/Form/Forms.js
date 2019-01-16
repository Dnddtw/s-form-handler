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

const FormSignin = (props) => {
    const { formID, handleInputChange, getFormElementValues, togglePopupForms, toggleValidAvailable, submitResponse = true } = props;

    return (
        <div className="form form__container">
            <form className="form__sign-in" onSubmit={(event) => toggleValidAvailable(formID, event)}>
                <fieldset disabled={submitResponse}>
                    <FormTitle>Вход в систему</FormTitle>    
										<InputEmail 
												{...props}
                        // handleInputChange={handleInputChange}
                        // getFormElementValues={getFormElementValues} 
                        // formID={formID}
                        // required="required"
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPasswordWithLink
                        handleInputChange={handleInputChange}
                        getFormElementValues={getFormElementValues} 
                        formID={formID}
                        // required="required"
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
    const { formID, handleInputChange, getFormElementValues, togglePopupForms, toggleValidAvailable, submitResponse = true } = props;

    return (
        <div className="form form__container">
            <form className="form__sign-up" onSubmit={(event) => toggleValidAvailable(formID, event)}>
                <fieldset disabled={submitResponse}>
                    <FormTitle>Регистрация в системе</FormTitle> 
                    <InputEmail 
                        handleInputChange={handleInputChange}
                        getFormElementValues={getFormElementValues} 
                        formID={formID}
                        required="required"
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPassword
                        handleInputChange={handleInputChange} 
                        getFormElementValues={getFormElementValues}
                        formID={formID}
                        required="required"
                        name="password">
                        Пароль
                    </InputPassword>

                    <InputPassword
                        handleInputChange={handleInputChange} 
                        getFormElementValues={getFormElementValues}
                        formID={formID}
                        required="required"
                        name="repeatPassword">
                        Повторите пароль
                    </InputPassword>

                    <FormSelect
                        name="citizenship"
                        formID={formID}
                        required="required"
                        handleInputChange={handleInputChange}
                        getFormElementValues={getFormElementValues}>
                        Гражданство
                    </FormSelect>

                    <FormTermOfUse
                        name="termOfUse"
                        formID={formID}
                        required="required"
                        handleInputChange={handleInputChange}
                        getFormElementValues={getFormElementValues}>
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