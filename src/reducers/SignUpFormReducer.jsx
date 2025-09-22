export const SignUpActionTypes = {
  changeName: "setName",
  changeEmail: "setEmail",
  changePassword: "setPassword",
  changePasswordConfirmation: "setPasswordConfirmation",
  changeAddressStreet: "setStreet",
  changeAddressZipcode: "setZipcode",
  changeAddressHouseNumber: "setHouseNumber",
  changeHobbies: "setHobbies",
  reset: "reset",
};

export const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  address: {
    street: "",
    zipCode: 0,
    houseNumber: "",
  },
  hobbies: [],
  errors: [], // Array of { key, message }
};

export const Hobbies = [
  "Running",
  "Swimming",
  "Cycling",
  "Hiking",
  "Reading",
  "Traveling",
  "Cooking",
  "Gardening",
  "Fishing",
  "Crafting",
  "Gaming",
  "Photography",
];

export function hasErrors(obj) {
  return Object.values(obj).some((value) => {
    if (value && typeof value === "object") {
      return hasErrors(value);
    }
    return value !== null && value !== "";
  });
}

const removeError = (errors, key) => errors.filter((e) => e.key !== key);

const signUpReducer = (state, action) => {
  let errors = state.errors;
  switch (action.type) {
    case SignUpActionTypes.changeName: {
      errors = removeError(errors, "name");
      if (action.value === "") {
        errors = [...errors, { key: "name", message: "Name is required" }];
      }
      return {
        ...state,
        name: action.value,
        errors,
      };
    }
    case SignUpActionTypes.changeEmail: {
      errors = removeError(errors, "email");
      if (action.value === "") {
        errors = [...errors, { key: "email", message: "Email is required" }];
      } else if (!action.value.includes("@")) {
        errors = [...errors, { key: "email", message: "Email is invalid" }];
      }
      return {
        ...state,
        email: action.value,
        errors,
      };
    }
    case SignUpActionTypes.changePassword: {
      errors = removeError(errors, "password");
      if (action.value === "") {
        errors = [
          ...errors,
          { key: "password", message: "Password is required" },
        ];
      } else if (action.value.length < 6) {
        errors = [
          ...errors,
          {
            key: "password",
            message: "Password must be at least 6 characters",
          },
        ];
      }
      return {
        ...state,
        password: action.value,
        errors,
      };
    }
    case SignUpActionTypes.changePasswordConfirmation: {
      errors = removeError(errors, "passwordConfirmation");
      if (action.value === "") {
        errors = [
          ...errors,
          {
            key: "passwordConfirmation",
            message: "Password Confirmation is required",
          },
        ];
      } else if (action.value !== state.password) {
        errors = [
          ...errors,
          {
            key: "passwordConfirmation",
            message: "Password Confirmation must match Password",
          },
        ];
      }
      return {
        ...state,
        passwordConfirmation: action.value,
        errors,
      };
    }
    case SignUpActionTypes.changeAddressStreet: {
      errors = removeError(errors, "address.street");
      if (action.value === "") {
        errors = [
          ...errors,
          { key: "address.street", message: "Street is required" },
        ];
      }
      return {
        ...state,
        address: {
          ...state.address,
          street: action.value,
        },
        errors,
      };
    }
    case SignUpActionTypes.changeAddressHouseNumber: {
      errors = removeError(errors, "address.houseNumber");
      if (action.value === "") {
        errors = [
          ...errors,
          { key: "address.houseNumber", message: "House Number is required" },
        ];
      }
      return {
        ...state,
        address: {
          ...state.address,
          houseNumber: action.value,
        },
        errors,
      };
    }
    case SignUpActionTypes.changeAddressZipcode: {
      errors = removeError(errors, "address.zipCode");
      if (action.value === "") {
        errors = [
          ...errors,
          { key: "address.zipCode", message: "Zip Code is required" },
        ];
      } else if (isNaN(action.value) || action.value <= 0) {
        errors = [
          ...errors,
          {
            key: "address.zipCode",
            message: "Zip Code must be a positive number",
          },
        ];
      }
      return {
        ...state,
        address: {
          ...state.address,
          zipCode: action.value,
        },
        errors,
      };
    }
    case SignUpActionTypes.changeHobbies: {
      errors = removeError(errors, "hobbies");
      if (!action.value || action.value.length === 0) {
        errors = [
          ...errors,
          { key: "hobbies", message: "At least one hobby is required" },
        ];
      }
      return {
        ...state,
        hobbies: action.value,
        errors,
      };
    }
    case SignUpActionTypes.reset: {
      return initialState;
    }
    default:
      return state;
  }
};

export default signUpReducer;
