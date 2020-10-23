const initialState = {
  authError: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "SIGNOUT_SUCCESS":
      console.log("Sign out success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log(action.payload.message);
      return {
        ...state,
        authError: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducers;
