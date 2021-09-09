import React from "react";
import {Button, FormControl, Input} from "@material-ui/core";

import "./ChatRoom.css";
import useChat from "../useChat/useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Channel: {roomId}</h1>
      <div className="messages-container">
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