import logo from "./logo.svg";
import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const googleClickHandler = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  return (
    <div className="App">
      <div>
        <button onClick={googleClickHandler}>Sign In Google</button>
      </div>
      <div>
        <h1>Name: {user.displayName}</h1>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
