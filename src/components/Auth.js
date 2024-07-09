import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">Sign In with your Google Account</h5>
                <p class="card-text">Welcome to our chat community! Dive into engaging conversations, meet new people, and stay connected. Sign in with Google to unlock the chat room and start your journey with us!</p>
                <br /><br />
                <div className="auth">
                    <button onClick={signInWithGoogle}> Sign In Now </button>
                </div>
            </div>
        </div>  
    </div>
    
  );
};