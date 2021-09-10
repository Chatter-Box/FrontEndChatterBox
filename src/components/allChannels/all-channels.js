import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Channel } from './channel';

export const AllChannels = () => {

    const { id, username, token, email } = JSON.parse(localStorage.getItem('user'));
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:8080/channel-controller/readAll`,
            headers: { 'Authorization': `Bearer ${token}`}
        });
        if (response.data.length > 0) {
            setChannels(response.data);
        }
        setLoading(false);
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>All Channels</h1>
            {channels.map(channel => <Channel name={channel.name} />)}
        </>
    );
}