import React, { useState } from 'react';
import PropTypes from 'prop-types'
import tres from './pin.png';
import cuatro from './verde.png';
import './Profile.css';
import { useHistory, Link } from 'react-router-dom'; 
import Cards from './Cards';
import { Grid, Button, makeStyles, CardActions } from "@material-ui/core";
import { SearchBar } from '../direct-messages/searchBar';


// import Headerss from './Headerss';
//import Settings from './Settings';



// const onClick= () => {
//   console.log('click')
// }
const Header = ({ title, onAdd, showAdd }) => {
 // const location = useLocation()
const[imagePreview, setImagePreview] = useState(null);
const[error, setError] = useState(false)

const handleImageChange = (e) => {
  setError(false);
  const selected = e.target.files[0];
  const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
  if (selected && ALLOWED_TYPES.includes(selected.type)){
   let reader = new FileReader();
   reader.onloadend = () => {
  setImagePreview(reader.result);
   }
   reader.readAsDataURL(selected);
  }else{
    setError(true);
    console.log("file not supported")
  }
};

let history = useHistory();
//history.push('/settings')


const user = JSON.parse(localStorage.getItem('user'));
const { id, token, username } = user;

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
const classes = useStyles();


const goToDM= (event) => {
  event.preventDefault();
  history.push(`/searchbar`);
}

  return (

    <header className='header'>
      <div>
      <SearchBar></SearchBar>
           <h1 className="h__one"> Good to see you {username}!</h1>
        </div>
   
      
      <div className="Profile">
 <div className ="container"> 
 {error && <p className="errorMsg"> File no suppoerted</p>}
 <div 
 className="imgPreview"
   style={{
     background: imagePreview
      ? `url("${imagePreview}")no-repeat center/cover` 
      : "#131313"}}
      >
   {!imagePreview && (
     <div>
     <p>Add image</p>
     <label htmlFor="fileUpload" className= "customFileUpload">
       Choose file
       </label>
       <input type= "file" id="fileUpload" onChange ={handleImageChange}/>
       {/* <span>(jpg, jpeg or png)</span> */}
       </div>
   )}
 </div>

 {imagePreview && <button onClick={() => setImagePreview(null)}>Remove image </button>}


 </div>
      </div>



{/* 
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div> */}


{/* <Button color='red' text=' Edit Profile' onClick= {() =>{
   history.push("/settings");
   }}
   > 
   Profile
   </Button>  */}

   {/* -------/////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<CardActions> 
   <Button className="bts" variant="outlined" size="small" onClick= {() =>{
   history.push("/settings");
   }}
   > 
   Edit Profile </Button>
   </CardActions>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

<div>
  <p className="p"> Open DM's</p>
</div>
<br></br>



{/* ------------------------------------------------------------image  ONE---------------------------------------------------------------------------*/}
<a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX">
<img className= "una" width="130" height="110" src = {tres} alt=""/>
</a> 






{/* ------------------------------------------------------------image  TWO---------------------------------------------------------------------------*/}
<Link to="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX">
<img className= "dos" width="130" height="110" src = {cuatro} alt=""/>
</Link>



{/* ------------------------------------------------------------Name of user buttons  ---------------------------------------------------------------------------*/}

<br></br>
<Button className="button__one" variant="outlined"  color="green" onClick= {() =>{
   history.push("/message");
   }}
   > 
  Name of user </Button>
  
 

  <Button className="button__two" variant="outlined" color="green" onClick= {() =>{
   history.push("/message");
   }}
   > 
  name of user </Button>

  <br></br>
   <br></br>
   <br></br>
   <br></br>


   <Link to="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX">
<img className= "dos" width="130" height="110" src = {cuatro} alt=""/>
</Link>

<br></br>
<Button className="button__one" variant="outlined"  color="green" onClick= {() =>{
   history.push("/message");
   }}
   > 
  Name of user </Button>

  <br></br>
   <br></br>
{/* <form>
<FormControl>
  <Button className="bot" variant="outlined" color="primary"  endIcon={<Icon>send</Icon>} type='submit' onClick= {() =>{
   history.push("/messages");
   }}
   > 
  Messages </Button>
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</FormControl>
</form> */}

{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* <form>
<FormControl>
  <Button className="bot2"  variant="outlined" color="primary"  endIcon={<Icon>send</Icon>} type='submit' onClick= {() =>{
   history.push("/messages");
   }}
   > 
  Messages </Button>
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</FormControl>
</form>
   <br></br> */}
 <br></br>
   <br></br>


<Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="flex-end"
    >
      <Grid item sm={12} sm={8} md={4}>
        <Cards  />
      </Grid>
    
    </Grid>


   


    
 


 
  
      {/* <img className= "card__img" width="60" height="40" src = {img2} alt=""/>
      <h3>paolaaaaa</h3> */}
     
     <br></br>
          {/* // color={showAdd ? 'red' : 'green'}
          // text={showAdd ? 'Close' : 'edit profile'}
          // onClick={onAdd} */}
       
<br></br>

{/* <div>aurqaaaaaaaaaaaa</div>
<br></br>
<CardActions>
        <Button variant="outlined" color='secondary' size="large" onClick= {() =>{
   history.push("/messages");
   }}
   > 
   go to channel </Button>
      </CardActions>
      
  <button className="bo"> 
    BUTTON
   <div> 
       </div> 
  </button>
 */}




    </header>
  )
}



Header.defaultProps = {
  title: 'userName',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};







export default Header




