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
  if (!/[0-9+]/.test(phone)) {
    error.push("Phone number should only contain digits.");
  }

  // Check if the phone number length is less than 9
  if (phone?.length < 9 || phone?.length >= 12) {
    error.push("Phone number must be at least 9 characters long.");
  }

  return error;
};

const passwordValidator = (
  password = "Aa1234@",
  confirmpassword = " Aa1234@"
) => {
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

  if (confirmpassword != "") {
    password != confirmpassword &&
      error.push("Confirmed password did not match");
  }
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

const InputValidator = ({
  phone,
  email,
  password,
  confirmpassword,
  FName,
  LName,
}) => {
  return {
    phone: { type: "phone", error: phoneValidator(phone) },
    email: { type: "email", error: emailValidator(email) },
    password: {
      type: "password",
      error: passwordValidator(password, confirmpassword),
    },
    confirmpassword: {
      type: "confirmpassword",
      error: passwordValidator(password, confirmpassword),
    },
    FName: { type: "FName", error: nameChecker(FName) },
    LName: { type: "LName", error: nameChecker(LName) },
  };
};

export default InputValidator;
