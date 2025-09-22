import { useReducer } from "react";
import signUpReducer, { Hobbies } from "../reducers/SignUpFormReducer";
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
          {signUpData.errors
            .filter((error) => error.key === "name")
            .map((error) => (
              <div key={error.key} className="text-red-500">
                {error.message}
              </div>
            ))}
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
          {signUpData.errors
            .filter((error) => error.key === "email")
            .map((error) => (
              <div key={error.key} className="text-red-500">
                {error.message}
              </div>
            ))}
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
        <div>
          {signUpData.errors
            .filter((error) => error.key === "password")
            .map((error) => (
              <div key={error.key} className="text-red-500">
                {error.message}
              </div>
            ))}
        </div>
        <div>
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
          </div>
          <input
            type="password"
            name="passwordConfirmation"
            value={signUpData.passwordConfirmation}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changePasswordConfirmation,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        <div>
          {signUpData.errors
            .filter((error) => error.key === "passwordConfirmation")
            .map((error) => (
              <div key={error.key} className="text-red-500">
                {error.message}
              </div>
            ))}
        </div>

        <div>
          <div>
            <label htmlFor="street">Street</label>
          </div>
          <input
            type="text"
            name="street"
            value={signUpData.address.street}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changeAddressStreet,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        {signUpData.errors
          .filter((error) => error.key === "address.street")
          .map((error) => (
            <div key={error.key} className="text-red-500">
              {error.message}
            </div>
          ))}
        <div>
          <div>
            <label htmlFor="houseNumber">House Number</label>
          </div>
          <input
            type="text"
            name="houseNumber"
            value={signUpData.address.houseNumber}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changeAddressHouseNumber,
                value: e.target.value,
              })
            }
            className="border"
          />
          {signUpData.errors
            .filter((error) => error.key === "address.houseNumber")
            .map((error) => (
              <div key={error.key} className="text-red-500">
                {error.message}
              </div>
            ))}
        </div>

        <div>
          <div>
            <label htmlFor="zipcode">Zipcode</label>
          </div>
          <input
            type="number"
            name="zipCode"
            value={signUpData.address.zipCode}
            onChange={(e) =>
              dispatch({
                type: SignUpActionTypes.changeAddressZipcode,
                value: e.target.value,
              })
            }
            className="border"
          />
        </div>
        {signUpData.errors
          .filter((error) => error.key === "address.zipCode")
          .map((error) => (
            <div key={error.key} className="text-red-500">
              {error.message}
            </div>
          ))}
        <div>
          <div>
            <label htmlFor="Hobbies">Hobbies</label>
            {Hobbies.map((hobby) => (
              <div key={hobby}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  checked={signUpData.hobbies.includes(hobby)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch({
                        type: SignUpActionTypes.changeHobbies,
                        value: [...signUpData.hobbies, hobby],
                      });
                    } else {
                      dispatch({
                        type: SignUpActionTypes.changeHobbies,
                        value: signUpData.hobbies.filter((h) => h !== hobby),
                      });
                    }
                  }}
                />
                {hobby}
              </div>
            ))}
          </div>
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
            className="bg-gray-400 p-1.5 text-black rounded-lg cursor-pointer disabled:cursor-not-allowed"
            disabled={signUpData.errors.length > 0 ? true : false}
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
        </div>
      </form>

      {JSON.stringify(signUpData)}
    </div>
  );
};

export default SignUpForm;
