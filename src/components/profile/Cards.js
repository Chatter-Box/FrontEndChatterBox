import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'; 

const useStyles = makeStyles({
  root: {
    minWidth: 270,
  },
  bullet: {
    
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;


  let history = useHistory();

  return (
   <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          View all Channels
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button variant="outlined" color='secondary' size="large" onClick= {() =>{
   history.push("/message");
   }}
   > 
    channels </Button>
      </CardActions>
    </Card>

<br></br>
 
<Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Find channel
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button variant="outlined" color='secondary' size="large" onClick= {() =>{
   history.push("/message");
   }}
   > 
   go to channel </Button>
      </CardActions>
    </Card>


    <br></br>
 
<Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create channel
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button variant="outlined" color='secondary' size="large" onClick= {() =>{
   history.push("/createchannel");
   }}
   > 
   go to channel </Button>
      </CardActions>
    </Card>

 </div>


  );
}