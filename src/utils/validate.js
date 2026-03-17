export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      password
    );
  if (!isNameValid) {
    return "Invalid name format.";
  }
  if (!isEmailValid) {
    return "Invalid email format.";
  }
  if (!isPasswordValid) {
    return "Invalid password format.";
  }
  return null;
};
