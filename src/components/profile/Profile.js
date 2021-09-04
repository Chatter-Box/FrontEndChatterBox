import React, { useState } from 'react';
import PropTypes from 'prop-types'
import img2 from './sapo.PNG';
import tres from './pin.png';
import cuatro from './verde.png';
import './Profile.css';
import './card.css'
import { useHistory } from 'react-router-dom'; 
import Cards from './Cards';
import { Grid, Button, makeStyles, CardActions, Icon, FormControl } from "@material-ui/core";
// import Headerss from './Headerss';
//import Settings from './Settings';



const onClick= () => {
  console.log('click')
}
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




const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
const classes = useStyles();

  return (

    <header className='header'>
      <h1>{title}</h1>
      
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

   
<CardActions> 
   <Button variant="outlined" color='primary' size="small" onClick= {() =>{
   history.push("/settings");
   }}
   > 
   Edit Profile </Button>
   </CardActions>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

<div>DM's</div>

{/* ------------------------------------------------------------image  ONE---------------------------------------------------------------------------*/}
<img className= "una" width="130" height="110" src = {tres} alt=""/>



{/* ------------------------------------------------------------image  TWO---------------------------------------------------------------------------*/}
<img className= "dos" width="130" height="110" src = {cuatro} alt=""/>




{/* ------------------------------------------------------------  ---------------------------------------------------------------------------*/}

<br></br>
<Button className="botones" variant="outlined" margin-left="" color="secondary" nClick= {() =>{
   history.push("/messages");
   }}
   > 
  Messages </Button>
  

  <Button className="botonn" variant="outlined" margin-left="" color="primary" nClick= {() =>{
   history.push("/messages");
   }}
   > 
  Messages </Button>

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

<div>aurqaaaaaaaaaaaa</div>

<br></br>
<CardActions>
        <Button variant="outlined" color='secondary' size="large" onClick= {() =>{
   history.push("/messages");
   }}
   > 
   go to channel </Button>
      </CardActions>
<div>
  <button > 
    BUTTON
   <div> 
       </div> 
  </button>
</div>




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






