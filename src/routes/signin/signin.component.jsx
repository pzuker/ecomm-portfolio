import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import SignupForm from '../../components/signup-form/signup-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
