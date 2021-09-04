import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './components/message/Message';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SockJsClient from 'react-stomp';
import { GetRequestHooks } from './components/getRequestHook';


const SOCKET_URL = 'http://localhost:8080/message/all';


//why are we using REACT instead of Angular? React is much more popular, it is growing and very in demand, it is super light weight
//the angular framebook needs a lot more to get it going, everything in angular can be done with react 
//using material UI because google and more modern 

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ username: 'tatiana', message: 'hey' }, { username: 'miles', message: 'hello' }]);
  
  //objects so that they can have a user and piece of text
  //in order to store anything we always need to think about state


  const [username, setUsername] = useState(''); 
  
  
  //start with blank string because no user will have a name beforehand and this was setting up a hook 
  //need another hook called userEffect this allows the code to run once when the component loads
  //difference btwn useState and useEffect, the useState sets up a kind of short term memory when page is restarted and is a way to set up variable in react
  //useEffect is a block of code that gets executed based on a condition 
  //you can have several useEffect, many that you need for specified condition

  // useEffect(() => {
  //run once when the app component loads
  //all the documents are held inside snapshot below (docs are metadata)
  //iterating through each document and getting the data from that document 
  //   db.collection('messages').onSnapshot(snapshot => {
  //     setMessages(snapshot.docs.map(doc => doc.data()))  
  //   })
  // }, [] )



  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    setMessages(msg.message);
  }


  useEffect(() => {
    //run code here
    setUsername(prompt('Please enter your name'));
  }, []) //condition, map this to a variable, if blank it runs code once when app component loads, if input now everytime input changes the code runs everytime




  
  const sendMessage = (event) => {
    // all the logic to send a message goes here 
    
    event.preventDefault(); 
    //prevents the refresh from taking place upon hitting enter or "send message" button
    
    setMessages([...messages, { username: username, message: input }]) 
    //this adds the new message to the end of the array

    setInput(''); 
    //clear input so that when the message bar is cleared
  }

  //below I have added capital b Button to change the look of the button, I had to add Material UI
  //Can go to the https://material-ui.com/components/buttons/
  //disabled prevents sending empty
  //components are a powerful part of react, resuable allows you to write it once, can pass 'props' (properties) in and it allows you to 
  //change message contents


  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello Chatter!</h1>
      <img src="ChatterBoxLogo.png" className="Logo" alt="ChatterBox Logo" width="192" height="160" />
      <h2>Welcome {username}</h2>

      <form>

        <FormControl>
          <InputLabel >Message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>} type='submit' onClick={sendMessage}> Send </Button>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </FormControl>
      </form>

      <SockJsClient
        url={SOCKET_URL}
        topics={['/message/all']}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={msg => onMessageReceived(msg)}
        debug={false}
      />
      <GetRequestHooks/>
      
      {
        messages.map(message => (
          <Message username={username} message={message} /> //the person who has logged in and their message
        ))
      }
    </div>

  );
}

export default App;


