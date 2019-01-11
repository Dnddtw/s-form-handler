import React, { Component } from 'react';
import { 
    FormTitle, 
    InputEmail, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    FormTermOfUse,
    InputPasswordWithLink,
    FormSelect } from './FormComponents';

class FormSignin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formID, inputHandler } = this.props;
        
        return (
            <div className="form form__container">
                <form className="form__sign-in">
                    <FormTitle>Вход в систему</FormTitle>    

                    <InputEmail 
                        inputHandler={inputHandler} 
                        formID={formID}
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPasswordWithLink
                        inputHandler={inputHandler} 
                        formID={formID}
                        name="password">
                        Пароль
                    </InputPasswordWithLink>

                    <FormSubmitButton>Войти</FormSubmitButton>

                    <FormAdditional>Зарегистрироваться</FormAdditional>
                </form>
            </div>
        );
    }
};

class FormSignup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formID, inputHandler } = this.props;

        return (
            <div className="form form__container">
                <form className="form__sign-up">
                    <FormTitle>Регистрация в системе</FormTitle> 

                    <InputEmail 
                        inputHandler={inputHandler} 
                        formID={formID}
                        name="email"> 
                        Электронная почта 
                    </InputEmail>

                    <InputPassword
                        inputHandler={inputHandler} 
                        formID={formID}
                        name="password">
                        Пароль
                    </InputPassword>

                    <InputPassword
                        inputHandler={inputHandler} 
                        formID={formID}
                        name="repeatPassword">
                        Повторите пароль
                    </InputPassword>

                    <FormSelect>Гражданство</FormSelect>

                    <FormTermOfUse>Соглашаюсь с <a href="#" className="text-blue">правилами и условиями сервиса</a></FormTermOfUse>

                    <FormSubmitButton>Зарегистрироваться</FormSubmitButton>

                    <FormAdditional>Войти</FormAdditional>
                </form>
            </div>
        );
    }
};

export { FormSignin, FormSignup };