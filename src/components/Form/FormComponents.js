import React from 'react';

const FormLabel = (props) => {
    return <label htmlFor={`${props.name}`} className="form__label"> {props.children} </label>
}

const InputEmail = (props) => {
    const { formID, name, handleInputChange, getFormElementValue } = props;
    const value = getFormElementValue(formID, name);
    const forName = `${formID}-${name}`;
    
    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <input 
                type="email" 
                onChange={(event) => handleInputChange(formID, { name }, event)} 
                className="form__input" 
                id={forName} 
                name={name}
                value={value}
            />
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
};

const InputPassword = (props) => {
    const { formID, name, handleInputChange, getFormElementValue } = props;
    const value = getFormElementValue(formID, name);
    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <input 
                type="password" 
                className="form__input" 
                onChange={(event) => handleInputChange(formID, { name }, event)}
                id={forName} 
                name={name}
                value={value}
            />
        </div>
    );
};

const InputPasswordWithLink = (props) => {
    const { formID, name, handleInputChange, getFormElementValue } = props;
    const value = getFormElementValue(formID, name);
    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <div className="form__flex">
                <FormLabel name={forName}> {props.children} </FormLabel>
                <a href="#" className="form__link">Забыли пароль?</a>    
            </div>
            <input 
                type="password" 
                className="form__input" 
                onChange={(event) => handleInputChange(formID, { name }, event)}
                id={forName} 
                name={name}
                value={value}
            />
        </div>
    );
};

const FormTitle = (props) => {
    return <h1 className="form__title">{props.children}</h1>   
};

const FormSubmitButton = (props) => {
    return (
        <div>
            <button className="form__submit">{props.children}</button>
        </div>
    );
};

const FormAdditional = (props) => {
    const { togglePopupForms } = props;
    return (
        <div className="popup__additional">
            <button className="popup__link" onClick={togglePopupForms}> {props.children} </button>
        </div>
    );
};

const FormSelect = (props) => {
    const { formID, name, handleInputChange, getFormElementValue } = props;
    const value = getFormElementValue(formID, name);
    const forName = `${formID}-${name}`;

    return (
        <div className="form__element">
            <FormLabel name={forName}> {props.children} </FormLabel>
            <div className="select-container">
                <select 
                    name={name} 
                    id={forName}  
                    className="form__select"
                    onChange={(event) => handleInputChange(formID, { name }, event)}
                    value={value}>

                    <option value="1111">1111</option>
                    <option value="2222">2222</option>
                    <option value="3333">3333</option>
                </select>
            </div>
            {/* <p className={`form__error ${errorValid}`}>{errorMessage}</p> */}
        </div>
    );
};

const FormTermOfUse = (props) => {
    const { formID, name, handleInputChange, getFormElementValue } = props;
    const value = getFormElementValue(formID, name);
    const forName = `${formID}-${name}`;

    return (
        <div className="form__element checkbox">
            <label htmlFor={forName} className="checkbox__label">
                <input 
                    type="checkbox" 
                    name={name} 
                    id={forName} 
                    className="checkbox__checkbox" 
                    onChange={(event) => handleInputChange(formID, { name }, event)}
                    value={value}
                />
                <span className="checkbox__checkmark"></span> {props.children}
            </label>
        </div>
    );
};

export { 
    InputEmail, 
    FormTitle, 
    InputPassword, 
    FormSubmitButton, 
    FormAdditional, 
    InputPasswordWithLink,
    FormSelect,
    FormTermOfUse
};