import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import userAuth from "../hooks/userAuth";

export const Authenticate = () => {
  const { user, isLoggedIn } = userAuth();

  const handleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        //console.log(email);

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={() => handleAuth()}>Login</button>
      ) : (
        <button onClick={() => auth.signOut()}>Logout</button>
      )}
    </div>
  );
};
