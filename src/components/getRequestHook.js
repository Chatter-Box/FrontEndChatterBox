// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const instance = axios.create({
//   baseURL: 'http://localhost:8080/message/',
//   headers: {'X-Custom-Header': 'foobar'}
// });


// function GetRequestHooks() {

    
//     const getAllMessages = async () => {

//         let messages = []
//         messages = await instance.get('/all')
//         .then(response => messages(response.data.total));

//     }

//     useEffect(() => {
//     GetRequestHooks()
//         }, []);


//     return (
//         <div className="card text-center m-3">
//             <h5 className="card-header">GET Request with React Hooks</h5>
//             <div className="card-body">
//                 All Chat Messages: {messages}
//             </div>
//         </div>
//     );
// }

// export { GetRequestHooks };