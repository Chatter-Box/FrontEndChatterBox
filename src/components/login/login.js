import { FormControl, FormHelperText, Input, InputLabel, Grid, TextField, Button, Link, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import './login.css';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkIfUserExists = (event) => {
        event.preventDefault();
        // look for the users info in the database
        fetch(`/profile/login/${username}/${password}`)
            .then(response => response.json())
            .then(body => body.username === username ? takeUserToProfile() : wrongUsernameOrPassword());
    }

    const takeUserToProfile = () => {
        // If the user exists, this function gets called
        // and takes the user to their profile
        console.log('They got taken to their profile');
    }

    const wrongUsernameOrPassword = () => {
        alert('Wrong Username or Password. Try again!');
        setUsername('');
        setPassword('');
    }
    
    console.log(username);
    console.log(password);

    return (
        <Grid align='center'>
            <h1>Welcome to Chatter-Box!</h1>
            <Paper className='paper__style' variant='outlined' elevation={10}>
                <TextField className='item__position' fullWidth
                    value={username} onChange={(input) => setUsername(input.target.value)} 
                    label='Username' placeholder='Enter Username'/> <br/><br/>

                <TextField className='item__position' fullWidth
                    value={password} onChange={(input) => setPassword(input.target.value)} 
                    label='Password' placeholder='Enter Password' type='password'/> <br/><br/>
            
                <Button className='item__position' fullWidth variant='contained' disabled={!username || !password} onClick={checkIfUserExists} size='medium' color='primary'>Login</Button> <br/><br/><br/>

                <Link className='item__position' /*href='Link to registration page'*/>Create a New Account</Link> <br/>
            </Paper>
            <PersonIcon className='person__icon' /*href='Link to the about me page'*/ style={{fontSize: '100px'}}/>
        </Grid>
    );
}