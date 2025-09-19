import { useReducer } from "react";
import signUpReducer from "../reducers/SignUpFormReducer";
import { SignUpActionTypes } from "../reducers/SignUpFormReducer";
import { initialState } from "../reducers/SignUpFormReducer";

const SignUpForm = () => {
  const [signUpData, dispatch] = useReducer(signUpReducer, initialState);

  const onSubmitForm = () => {};

  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            name="name"
            value={signUpData.name}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changeName,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changeEmail,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changePassword,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        <div className="flex gap-2 items-center justify-center mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmitForm();
            }}
            className="bg-gray-400 p-1.5 text-black rounded-lg "
          >
            Create An Account
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
            }}
            className="bg-gray-400 p-1.5 text-black rounded-lg"
          >
            Login
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: SignUpActionTypes.reset, value: initialState });
            }}
            className="bg-gray-400 p-1.5 text-black rounded-lg "
          >
            Reset Form
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: SignUpActionTypes.address.street, value: initialState });
            }}
            className="bg-gray-400 p-1.5 text-black rounded-lg "
          >
            Street
          </button>



        </div>
      </form>

      {JSON.stringify(signUpData)}
    </div>
  );
};

export default SignUpForm;
