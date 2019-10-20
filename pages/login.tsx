import React from "react";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { RootState } from "../setup/reducers/rootReducer";

function LoginPage() {
  const firebase = useFirebase();
  const auth = useSelector((state: RootState) => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  return (
    <div>
      <div>
        <h2>Auth</h2>
        {!isLoaded(auth) ? (
          <span>Loading...</span>
        ) : isEmpty(auth) ? (
          <button type="button" onClick={loginWithGoogle}>
            Login With Google
          </button>
        ) : (
          <pre>{JSON.stringify(auth, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
