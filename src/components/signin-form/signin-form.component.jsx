import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./signin-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFiels;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const onChangeFieldHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFiels, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);

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
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
