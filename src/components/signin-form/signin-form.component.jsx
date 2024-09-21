import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import "./signin-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFiels;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const onChangeFieldHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFiels, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      setFormFields(defaultFormFields);
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      )
        alert("Inconrrect credentials!");
      else console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: onChangeFieldHandler,
            name: "email",
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: onChangeFieldHandler,
            name: "password",
            value: password,
            required: true,
          }}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
