import React from 'react';
import { SearchBar } from './searchBar';

export const DmChat = (props) => {
    
    const { dmChatName } = props.match.params;
    
    return (
        <div className='text__align'>
            <div className='dmChat__searchbar'>
                <SearchBar  />
            </div>
            <h1>DM Chat {dmChatName}</h1>
        </div>
    );
}