import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
import Copyright from "./Copyright.js";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <>
    <div className="App">
      <div className="app-header">
        <h1> myChatroom </h1>
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <button className="btn btn-danger" onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
    <Copyright/>
    </>
  );
};