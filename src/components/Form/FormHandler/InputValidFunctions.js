import errorMessage from '../../../text/text.json';

export const validEmail = value => {
    // Valid function
    const emailValidRegExp = /\S+@\S+\.\S+/;

		if (value.length === 0) { return errorMessage.email.empty; } 
		else if (!emailValidRegExp.test(value)) { return errorMessage.email.invalid; }

    return "";
};

export const validPassword = value => {
    // Valid function
    return value.length === 0 ? errorMessage.password.empty : "";
};

const validHandler = (name, value, validateScheme) => {
    let flag = false;
    
    const some = validateScheme && validateScheme.hasOwnProperty(name);
    if (some) {
        validateScheme[name].some((fn) => {
            const flaga = fn(value);
            if (flaga) {
                flag = flaga;
            }
            return flaga;
        });
    }

    return flag;



    return false;
};

export default validHandler;