export const validateForm = (email, password, confirmPassword) => {
  const status = {
    valid: true,
    message: "",
  };

  const validationRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  if (password.length <= 5) {
    status.valid = false;
    status.message = "Password is not long enough.";
  }

  if (password !== confirmPassword) {
    status.valid = false;
    status.message = "Passwords do not match.";
  }

  if (!validationRegex.test(email)) {
    status.valid = false;
    status.message = "Email is invalid.";
  }

  return status;
};
