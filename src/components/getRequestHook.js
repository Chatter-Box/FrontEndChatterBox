import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GetRequestHooks() {
    const [Message, setMessages] = useState(null);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('/message/all')
            .then(response => setMessages(response.data.total));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                All Chat Messages: {Message}
            </div>
        </div>
    );
}

export { GetRequestHooks };