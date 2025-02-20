// authService.js
export const fakeRegister = ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful registration
        resolve({ message: "Registration successful" });
      }, 1000);
    });
  };
  
  export const fakeLogin = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo, any email/password will do and return a dummy token
        const token = "dummy.jwt.token";
        resolve({ token });
      }, 1000);
    });
  };
  
  export const fakeForgotPassword = ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate sending a reset link
        resolve({ message: "Password reset link sent to " + email });
      }, 1000);
    });
  };
  