import { Grid, Paper, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './register.css';

export const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

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
        resetTextFields();
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
            <Paper className='paper__style' variant='outlined'>
                <h1>Registration</h1>
                <TextField label='Username' variant='outlined' fullWidth
                value={username} onChange={(input) => setUsername(input.target.value)}/> <br/><br/>
                <TextField label='Password' type='password' variant='outlined' fullWidth
                value={password} onChange={(input) => setPassword(input.target.value)}/> <br/><br/>
                <TextField label='First Name' variant='outlined' fullWidth
                value={firstName} onChange={(input) => setFirstName(input.target.value)}/> <br/><br/>
                <TextField label='Last Name' variant='outlined' fullWidth
                value={lastName} onChange={(input) => setLastName(input.target.value)}/> <br/><br/>
                <TextField label='Email' type='email' variant='outlined' fullWidth
                value={email} onChange={(input) => setEmail(input.target.value)}/>
                <Button variant='contained' color='primary' fullWidth
                onClick={registerProfile}>Register</Button>
            </Paper>
        </Grid>
    )
}