import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import "./Home.css";
import axios from 'axios';


const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  // const handleRoomNameChange = (event) => {
  //   setRoomName(event.target.value);
  // };

  const user = JSON.parse(localStorage.getItem('user'));
  const { id, token, username } = user;
  const history = useHistory();


  const goToProfile= (event) => {
    event.preventDefault();
    history.push(`/profile/${username}`);
}

const createChannel = async (event) => {
  event.preventDefault();
  setRoomName(event.target.value);
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/channel/create',
      data: {
          name: roomName,
          type: 'CHANNEL',
      },
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  });
  console.log(response.data)
}

  return (
    <div className="home-container">
         <h2 className="go-back"><ArrowBackIcon className='ArrowBack_icon link' onClick={goToProfile}/>  
      Return To Profile </h2>
      <input
        type="text"
        placeholder="Channel Name"
        value={roomName}
        onChange={createChannel}
        className="text-input-field"
      />
      <Link to={`chatroom/${roomName}`} className="enter-room-button">
        Create Channel
      </Link>
    </div>
  );
};
export default Home