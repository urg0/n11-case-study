export const validatePassword = (password) => {
  const lengthValid = password?.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const errorMessages = [];

  if (!lengthValid) {
    errorMessages.push("At least 8 characters");
  }

  if (!hasUpperCase) {
    errorMessages.push("At least one uppercase letter");
  }

  if (!hasLowerCase) {
    errorMessages.push("At least one lowercase letter");
  }

  if (!hasNumber) {
    errorMessages.push("At least one digit");
  }

  return {
    errors: errorMessages,
  };
};
