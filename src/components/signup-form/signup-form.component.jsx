import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.action";

import "./signup-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFiels;

  const onChangeFieldHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFiels, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists!");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            onChange: onChangeFieldHandler,
            name: "displayName",
            value: displayName,
            required: true,
          }}
        />

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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            onChange: onChangeFieldHandler,
            id: "confirmPassword",
            name: "confirmPassword",
            value: confirmPassword,
            required: true,
          }}
        />

        <Button type="submit">Sign Up </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
