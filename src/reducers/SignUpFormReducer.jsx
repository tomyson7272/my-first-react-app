export const SignUpActionTypes = {
  changeName: "setName",
  changeEmail: "setEmail",
  changePassword: "setPassword",
  changeAddressStreet: "setStreet",
  changeAddressZipcode: "setZipcode",
  changeAddressHouseNumber: "setHouseNumber",
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

  if (action.type === SignUpActionTypes.changeAddressStreet) {
    return {
      ...state,
      address:{
        ...state.address,
        street: action.value},
    };
  }

  if (action.type === SignUpActionTypes.changeAddressHouseNumber) {
    return {
      ...state,
      address:{
        ...state.address,
        houseNumber: action.value,}
    };
  }

  if (action.type === SignUpActionTypes.changeAddressZipcode) {
    return {
      ...state,
      address:{
        ...state.address,
      zipCode: action.value,}
    };
  }
};

export default signUpReducer;
