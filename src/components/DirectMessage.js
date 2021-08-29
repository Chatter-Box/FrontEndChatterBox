//es7 snippets
//this is the styling for the messages
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './DirectMessage.css';


function DirectMessage({message, username}) {
    const isUser = username === message.username; //is this the user who has logged in, if the username is equal to the message username then code below would be true
    //changing so that each user has different styling, below changed className
    //the if then statement allows us to have if logged in use userCard styling if not then use guest, using BEM convention styling
    //first part is component and second is element 
    //set up database using firestore (firebase) this also allows hosting online 
        return (
            <div className={`message ${isUser && 'message__user'}`}>
                <Card className={isUser ? "message__userCard" : "message__guestCard"}> 
                    <CardContent>
                        <Typography 
                            color ="white" 
                            variant= "h5"
                            component="h2"
                        >
                            {message.username}: {message.message}
                        </Typography>
                    </CardContent>
                </Card>
                </div>
        )
}

export default DirectMessage
