const emailValidator = (email = "abc123@gmail.com") => {
  const error = [];

  // Regular expression for a valid email pattern
  const pattern = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z\.]{2,6}$/;

  // If the email doesn't match the pattern, push an error
  !pattern.test(email) && error.push("Email is invalid");

  return error;
};

const phoneValidator = (phone = "123456789") => {
  const error = [];

  // If the phone contains any invalid characters or doesn't match the length requirement, add error
  if (!/^\d{10}$/.test(phone)) {
    error.push("Phone number should only contain digits.");
  }

  // Check if the phone number length is less than 9

  return error;
};

const passwordValidator = (password = "Aa1234@") => {
  const error = [];
  // Regular expression for a valid password pattern
  !/[0-9]/.test(password) &&
    error.push("Password must include atleast one number from 0-9");
  !/[a-z]/.test(password) &&
    error.push("Password must include atleast one small letter from a-z");
  !/[A-Z]/.test(password) &&
    error.push("Password must include atleast one capital letter from A-Z");
  !/[!@#$%^&*()_+]/.test(password) &&
    error.push(
      "Password must include atleast one special character from !@#$%^&*()_+"
    );
  password?.length < 6 &&
    error.push("Password length must be atleast 6 characters long");

  // If the email doesn't match the pattern, push an error

  return error;
};
const nameChecker = (name = "ehehhee") => {
  const error = [];

  !/[a-zA-Z]/.test(name) && error.push("invalid Name ");
  /[0-9!@#$%^&*()_+]/.test(name) &&
    error.push("Name cannot include any digit or special character ");

  name?.length < 3 &&
    error.push("Name must must be atleast 3 characters long ");
  return error;
};
const confirmedPasswordValidator = ({ value, formPassword }) => {
  const errors = [];
  if (value && formPassword) {
    if (value != formPassword) {
      errors.push("confiremd password did not match with password");
    }
    return errors;
  }
};

const InputValidator = (name, value, formPassword) => {
  const errors = {};
  const p = { password: "" };
  if (value) {
    if (name == "FName") {
      errors[name] = nameChecker(value);
    }
    if (name == "LName") {
      errors[name] = nameChecker(value);
    }
    if (name == "email") {
      errors[name] = emailValidator(value);
    }
    if (name == "phone") {
      errors[name] = phoneValidator(value);
    }
    if (name == "password") {
      errors[name] = passwordValidator(value);
    }
    if (name == "confirmpassword") {
      // errocrs[name] = passwordValidator(value);
      errors[name] = confirmedPasswordValidator({ value, formPassword });
    }

    return errors;
  }

  return null;
};

export default InputValidator;
