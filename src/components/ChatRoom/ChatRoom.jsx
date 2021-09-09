import React from "react";
import {Button, FormControl, Input} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./ChatRoom.css";
import useChat from "../useChat/useChat";
import { useHistory } from 'react-router';


const ChatRoom = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
  const user = JSON.parse(localStorage.getItem('user'));
  const { id, token, username } = user;
  const history = useHistory();


  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  const goToProfile= (event) => {
    event.preventDefault();
    history.push(`/profile/${username}`);
}

  return (
    
    <div className="chat-room-container">
      <h1 className="room-name">Channel: {roomId}</h1>
      <div className="messages-container">
      <div>
      <p><ArrowBackIcon className='ArrowBack_icon link' onClick={goToProfile}/>  
      Return To Profile</p>
    </div>
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>

      <form>
      <FormControl>
      <Input      
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      
      <Button disabled={!newMessage} onClick={handleSendMessage} type="submit" className="send-message-button">
        Send
      </Button>
      </FormControl>
      </form>
    </div>
  );
};

export default ChatRoom;