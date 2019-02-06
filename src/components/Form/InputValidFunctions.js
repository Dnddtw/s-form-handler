import errorMessage from '../../text/text.json';

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

const validHandler = (name, value) => {
    // General valid handler
    switch (name) {
      case "email":
        return validEmail(value);
				
      case "password":
      default:
        return validPassword(value);
    }
};

export default validHandler;