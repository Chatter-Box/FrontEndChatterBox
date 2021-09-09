import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import './direct-message.css';
import { useHistory } from 'react-router';

export const SearchBar = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const { id, token, username } = user;
    const [search, setSearch] = useState('');
    const [profiles, setProfiles] = useState({});
    const [profilesFound, setProfilesFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect (async () => {
        console.log(token);
        const response = await axios.get('http://localhost:8080/profile/findAll', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setProfiles(response.data);
        setLoading(false);
        console.log(response);
    }, []);

    const handleClick = async (profile) => {
        const name1 = `${username}&${profile.username}`;
        const name2 = `${profile.username}&${username}`;
        const channelExists1 = await axios({
            method: 'get',
            url: `http://localhost:8080/channel-controller/exists/${name1}`,
            headers: { 'Authorization': `Bearer ${token}`}
        });
        if (channelExists1.data) {
            history.push(`/dm/${name1}`)
            return
        }
        const channelExists2 = await axios({
            method: 'get',
            url: `http://localhost:8080/channel-controller/exists/${name2}`,
            headers: { 'Authorization': `Bearer ${token}`}
        });
        if (channelExists2.data) {
            history.push(`/dm/${name2}`)
            return
        }
        const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/channel-controller/create',
                data: {
                    name: name1,
                    type: 'DM'
                },
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
            });
        console.log(response.data)
        history.push(`/dm/${name1}`);
    }

    // useEffect( () => {
    //     setProfilesFound(profiles.filter(profile => profile.username.includes(search)));
    // }, [search]);

    if (loading) {
        return <p>Loading</p>
    }
    return (
        <>
            <TextField value={search} onChange={handleChange} variant='outlined' size='small' type='search' fullWidth placeholder='Search' />
            {profiles.filter(profile => {
                if (search === '') return 
                if (profile.username.toLowerCase().includes(search.toLowerCase())) return profile;
            })
            .map(profile => <p onClick={() => handleClick(profile)} key={profile.id}>{profile.username}</p>)}
        </>
    );
}