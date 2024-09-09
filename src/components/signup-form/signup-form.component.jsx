import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const [formFiels, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFiels;

  const onChangeField = (e) => {
    const { name } = e;
    return;
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={onChangeField}
          name="displayName"
          value={displayName}
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          onChange={onChangeField}
          name="email"
          value={email}
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={onChangeField}
          name="password"
          value={password}
          required
        ></input>
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          onChange={onChangeField}
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          required
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
