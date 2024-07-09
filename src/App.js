
import React, { useState, useEffect } from "react";
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth.js";
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";
import Copyright from "./components/Copyright.js";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <>
        <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      
        <div className="container">
          <div class="card text-center">
              <div class="card-body">
                {!isInChat ? (
                  <div className="room">
                    <h5 class="card-title">Type Room Name: </h5>
                    <p class="card-text">Enter the chat room by typing the room name below. To ensure you connect with your friends, <br /> make sure you and your friend enter the exact same room name. Let's get chatting!</p>
                    <br /><br />
                    <input id="roomInp" onChange={(e) => setRoom(e.target.value)} />
                    <button id="roomSearch"
                      onClick={() => {
                        setIsInChat(true);
                      }}>
                      Enter Chat
                    </button>
                  </div>
                ) : (
                  <Chat room={room} />
                )}
              </div>
          </div>   
      </div>
        
    </AppWrapper>
    </>
    
  );
}

export default ChatApp;