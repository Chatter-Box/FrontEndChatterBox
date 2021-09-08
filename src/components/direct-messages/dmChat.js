import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import axios from 'axios';
import { tokenizer } from 'acorn';

export const DmChat = (props) => {
    
    const { id, username, token, email } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    const { dmChatName } = props.match.params;
    const [newMessage, setNewMessage] = useState("");
    const { messages, sendMessage } = useState(dmChatName);
    console.log(dmChatName);
    console.log(dmChatName.substring(dmChatName.indexOf('&' + 1)));
    
    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    useEffect( async () => {
        console.log(token);
        const response = await axios.get('/channel-controller/readAll', {
            headers: { 'Authorization': `Bearer ${token}`}
        });
        if (response.data) {
            const dmChannels = response.data.filter(channel => channel.type === 'DM');
            const dmChannelWithChosenUser = dmChannels.filter(channel => channel.name.toLowerCase().includes())
        }
    }, [])

    return (
        <div className='text__align'>
            <div className='dmChat__searchbar'>
                <SearchBar  />
            </div>
            <h1>DM Chat {dmChatName}</h1>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field" />
            <button onClick={handleSendMessage} className="send-message-button">
                Send
            </button>
        </div>
    );
}