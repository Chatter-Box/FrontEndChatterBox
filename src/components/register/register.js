import { Grid, Paper, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';


export const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const registerProfile = (event) => {
        event.preventDefault();
        fetch('/profile/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: email
            })
        });
        history.push('/');
    }

    const resetTextFields = () => {
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <Grid align='center'>
            <Paper className='paper'>
                <h1>Registration</h1>
                <TextField label='Username' variant='outlined' fullWidth margin='normal' size='small'
                value={username} onChange={(input) => setUsername(input.target.value)}/>
                
                <TextField label='Password' variant='outlined' fullWidth margin='normal' type='password' size='small'
                value={password} onChange={(input) => setPassword(input.target.value)}/>
                
                <TextField label='First Name' variant='outlined' fullWidth margin='normal' size='small'
                value={firstName} onChange={(input) => setFirstName(input.target.value)}/>
                
                <TextField label='Last Name' variant='outlined' fullWidth margin='normal' size='small'
                value={lastName} onChange={(input) => setLastName(input.target.value)}/>
                
                <TextField label='Email' type='email' variant='outlined' fullWidth margin='normal' size='small'
                value={email} onChange={(input) => setEmail(input.target.value)}/>
                
                <Button variant='contained' color='primary' fullWidth
                onClick={registerProfile}>Register</Button>
            </Paper>
        </Grid>
    )
}