import React from 'react';

const InputEmail = (props) => {
    // const { type = "email" } = props;
    // const { error } = { props };

    // const validError = error ? props

    return (
        <div className="form__element">
            <label htmlFor="email-input" className="form__label"> {props.children} </label>
            <input type="email" placeholder="usermail@example.com" className="form__input" id="email-input"/>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const InputPassword = (props) => {
    return (
        <div className="form__element">
            <label htmlFor="password" className="form__label"> {props.children} </label>
            <input type="password" className="form__input" placeholder="•••••••••••"/>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const InputPasswordWithLink = (props) => {
    return (
        <div className="form__element">
            <div className="form__flex">
                <label htmlFor="password" className="form__label"> {props.children} </label>
                <a href="#" className="form__link">Забыли пароль?</a>    
            </div>
            <input type="password" className="form__input" id="" placeholder="•••••••••••"/>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const FormTitle = (props) => {
    return <h1 className="form__title">{props.children}</h1>   
}

const FormSubmitButton = (props) => {
    return (
        <div className="">
            <button className="form__submit">{props.children}</button>
        </div>
    );
}

const FormAdditional = (props) => {
    return (
        <div className="popup__additional">
            <div className="popup__link">{props.children}</div>
        </div>
    );
}

const FormSelect = (props) => {
    return (
        <div className="form__element">
            <label htmlFor="citizenship" className="form__label"> {props.children} </label>
            <div className="select-container">
                <select name="" id="citizenship" className="form__select">
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                </select>
            </div>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
}

const FormTermOfUse = (props) => {
    return (
        <div className="form__element checkbox">
            <label htmlFor="term-of-use" className="checkbox__label">
                <input type="checkbox" name="" id="term-of-use" className="checkbox__checkbox" />
                <span className="checkbox__checkmark"></span> З Правилами та умовами надання послуг ознайомлений, і підтверджую згоду на обробку персональних даних
            </label>
        </div>
    );
}

export { 
    InputEmail, 
    FormTitle, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    InputPasswordWithLink,
    FormSelect
};