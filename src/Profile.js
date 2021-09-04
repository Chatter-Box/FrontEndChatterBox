import React, { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types'
import img2 from './images/sapo.PNG';
import './Profile.css';
import Card from './Card';
import './card.css'
import { useHistory } from 'react-router-dom'; 
import Cards from './Cards';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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


<Button color='paleturquoise' text='edit profile' onClick= {() =>{
   history.push("/settings");
   }}
   > 
   Profile
   </Button> 

   <br></br> 
   <br></br>
   <br></br>

<div>DM's</div>

<img className= "card__img" width="60" height="40" src = {img2} alt=""/>
     

<Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="flex-end"
    >
      <Grid item sm={12} sm={8} md={4}>
        <Cards  />
      </Grid>
      <Grid item sm={12} sm={8} md={4} >
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

<div>
  <button > 
    BUTTON
  </button>
</div>



<div> className='cudritos'
  <div>
<Card title = 'channel one'/>
<Card title = 'channel two'/>
<Card title = 'channel three'/>
  </div>
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



