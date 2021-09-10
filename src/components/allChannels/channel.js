import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

export const Channel = (props) => {

    const history = useHistory();

    const handleClick = (event) => {
        history.push(`/chatroom/${props.name}`)
    }

    return (
        <>
             <h1>Channel</h1>
            <div>
                <h1>{props.name}</h1>
                <Button onClick={handleClick} />
            </div>
        </>
    );
} 