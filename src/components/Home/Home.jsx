import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const { id, token, username } = user;
  const history = useHistory();

  const goToProfile= (event) => {
    event.preventDefault();
    history.push(`/profile/${username}`);
}

  return (
    <div className="home-container">
         <h2 className="go-back"><ArrowBackIcon className='ArrowBack_icon link' onClick={goToProfile}/>  
      Return To Profile </h2>
      <input
        type="text"
        placeholder="Channel Name"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`chatroom/${roomName}`} className="enter-room-button">
        Create Channel
      </Link>
    </div>
  );
};
export default Home