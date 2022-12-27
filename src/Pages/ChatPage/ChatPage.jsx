import "./ChatPage.scss";
import io from "socket.io-client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { contextReserve } from "../../Context/ReserveProvider";
// import { Avatar } from "@mui/material";
import { animateScroll as scroll} from 'react-scroll'
import Header from "../../Components/Header/Header";
import { getCookie } from "../../utils/getCookie";




const socket = io.connect(process.env.REACT_APP_BACKEND);



const ChatPage = () => {

  const stringUser = getCookie('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');
  console.log(user)

  const bottomRef = useRef(null)
  const {reserve} = useContext(contextReserve)
  console.log(reserve)
  //Room State
  const [room] = useState(reserve._id);
  

  // Messages States
  const [message, setMessage] = useState('');
  // const [messageReceived, setMessageReceived] = useState('');
  const [messages, setMessages] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      // console.log(room)
    }
  };
  joinRoom()

  const sendMessage = () => {
    if(message !== ""){

    socket.emit("send_message", {message, room} );
    const newMessage = {
      body: message,
      from: "Me"

    }
    setMessages([...messages, newMessage])
    scroll.scrollToBottom()
    // console.log(messages)
    
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
    
      const newMessage = {
        body: data.message,
        from: "User"
      }
      // console.log(messages)
      setMessages([...messages, newMessage]);
      console.log(data)
      
    });
    scroll.scrollToBottom()

    
   
  }, [socket, messages]);

  // console.log(messages)

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  const handleSubmit = (event) => {
  
    event.preventDefault();
    setMessage("")
    

  }
  



  return (<>
  <Header navigateTo={'/chat'}></Header>

    <div className="container">
      
      <h1>{reserve.guardianID.userID.name}</h1>

      <div className="messages">
      {messages.map(message =>
      <div key={message.id} className={message.from==="Me"?"my-message":"guard-message"}>
      <span>
      {message.from}: {message.body}
      </span>
      </div> )}

      <div ref={bottomRef} />
      </div>
    </div>
    

    <form className="chat" onSubmit={handleSubmit}>
    <input
        className="chat-input"
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button className="chat-btn me-4" onClick={() =>sendMessage()}>Enviar</button>
      </form>
    </>);
}

export default ChatPage

