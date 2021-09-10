import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import axios from 'axios';
import useChat from "../useChat/useChat";
import { FormControl, Button, Input } from '@material-ui/core';
import '../ChatRoom/ChatRoom.css';

export const DmChat = (props) => {
    
    const { id, username, token, email } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    const { dmChatName } = props.match.params;
    const [newMessage, setNewMessage] = useState("");
    const { messages, sendMessage } = useChat(dmChatName);
    const [messageHistory, setMessageHistory] = useState([]);
    console.log(dmChatName);
    console.log(dmChatName.substring(dmChatName.indexOf('&' + 1)));
    
    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = async (event) => {
        event.preventDefault();
        //sendMessage(newMessage);
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/message/create',
            data: {
                profileSentFrom: username,
                body: newMessage,
                channelName: dmChatName,
            },
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        });
        console.log(response.data)
        sendMessage(response.data);
        setNewMessage('');
    };

    const persistMessage = (message) => {
        // const response = axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/message/create',
        //     data: {
        //         body: message,
        //     },
        //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        // });
        // console.log(response.data)
    }

    useEffect( async () => {
        console.log(token);
        const response = await axios({
            method: 'get',
            url: `http://localhost:8080/message/find/${dmChatName}`,
            headers: { 'Authorization': `Bearer ${token}`}
        });
        console.log(response)
        if (response.data.length > 0) {
            response.data.map(message => sendMessage(message));
        }
        // if (response.data) {
        //     const dmChannels = response.data.filter(channel => channel.type === 'DM');
        //     const dmChannelWithChosenUser = dmChannels.filter(channel => channel.name.toLowerCase().includes())
        // }
    }, [])

    return (
        <div className='text__align'>
            
            <div className='dmChat__searchbar'>
                <SearchBar  />
            </div>
           
            <h1 className='dm-chat-name'>DM Chat {dmChatName}</h1>
            
            {/* <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field" />
            <button onClick={handleSendMessage} className="send-message-button">
                Send
            </button> */}
            <div className="messages-container">
                <ol className="messages-list">
                {messages.map((message, i) => (
                    <li key={i} className='message-item' >
                    <p>{username} @ {message.timestamp}</p>
                    <p>{message.body}</p>
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
                    className="new-message-input-field" />
      
                <Button disabled={!newMessage} onClick={handleSendMessage} type="submit" className="send-message-button">
                    Send
                </Button>
            </FormControl>
            </form>
        </div>
    );
}