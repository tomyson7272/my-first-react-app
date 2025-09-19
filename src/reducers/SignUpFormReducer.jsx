export const SignUpActionTypes = {
  changeName: "setName",
  changeEmail: "setEmail",
  changePassword: "setPassword",
  reset: "reset",
};

export const initialState = {
  name: "",
  email: "",
  password: "",
  address: {
    street: "",
    zipCode: "",
    houseNumber: "",
  },
};

const signUpReducer = (state, action) => {
  if (action.type === SignUpActionTypes.changeName) {
    return {
      ...state,
      name: action.value,
    };
  }
  if (action.type === SignUpActionTypes.changeEmail) {
    return {
      ...state,
      email: action.value,
    };
  }
  if (action.type === SignUpActionTypes.changePassword) {
    return {
      ...state,
      password: action.value,
    };
  }
  if (action.type === SignUpActionTypes.reset) {
    return initialState;
  }
};

export default signUpReducer;
