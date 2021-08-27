import React, { useState } from 'react';
import './App.css';

function App() {
const [input, setInput] = useState('');
const [messages, setMessages] = useState(['hello', 'Hi', 'Whats up']);

console.log(input); //this allowed us to have messages in the console
console.log(messages);


const sendMessage = (event) => {
  // all the logic to send a message goes here 
  setMessages([...messages, input]) //this adds the new message to the end of the array
  setInput(''); //clear input so that when the message bar is cleared
}

  return (
    <div className="App">
      <h1>Hello ChatterBox Chatters! </h1>

      <input value={input} onChange = {event => setInput(event.target.value)} /> 
      <button onClick ={sendMessage}> Send Message</button>
     


      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
      
    </div>

  );
}

export default App;

