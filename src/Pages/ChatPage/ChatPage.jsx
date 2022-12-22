import "./ChatPage.scss";
import io from "socket.io-client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { contextReserve } from "../../Context/ReserveProvider";
import { Avatar } from "@mui/material";
import { animateScroll as scroll} from 'react-scroll'
import Header from "../../Components/Header/Header";




const socket = io.connect(process.env.REACT_APP_BACKEND);

const ChatPage = () => {
  const bottomRef = useRef(null)
  const {reserve} = useContext(contextReserve)
  console.log(reserve)
  //Room State
  const [room] = useState(reserve._id);
  
  const myImg = reserve.userID.image
  const userImg = reserve.guardianID.userID.image?reserve.guardianID.userID.image:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";
  console.log(userImg)

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
    socket.emit("send_message", { message, room });
    const newMessage = {
      body: message,
      from: "me"

    }
    
    setMessages([...messages, newMessage])
    scroll.scrollToBottom()
    // console.log(messages)
    
  
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
    
      const newMessage = {
        body: data.message,
        from: reserve.guardianID.userID.name
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
      <div key={message.id} className={message.from==="me"?"my-message":"guard-message"}>
      <span>
      <Avatar src={message.from==="me"?reserve.userID.image:reserve.guardianID.userID.image} />{message.from}: {message.body}
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

