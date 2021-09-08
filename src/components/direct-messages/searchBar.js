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
    console.log(user);

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect (async () => {
        console.log(token);
        const response = await axios.get('profile/findAll', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setProfiles(response.data);
        setLoading(false);
        console.log(response);
    }, []);

    const handleClick = async (profile) => {
        const response = await axios.post('channel-controller/create', {
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { 
                'name': `${username}&${profile.username}`,
                'type': 'DM',
                'profileList': [user, profile],
             }
        })
        console.log(response.data)
        history.push(`/${username}&${profile.username}`);
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