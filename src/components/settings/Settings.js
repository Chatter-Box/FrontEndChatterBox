import React from 'react';
import './Settings.css';
import { useHistory } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';


export default function Settings(){

  // const user = JSON.parse(localStorage.getItem('user'));
  // const { id, token, username } = user;
  const history = useHistory();

  const goToProfile= (event) => {
    event.preventDefault();
    history.goBack();
} 

return (
<div>    
  <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    }}>
    <ArrowBackIcon className='ArrowBack_icon link' onClick={goToProfile}/>
      <span className='ArrowBack_icon'>Return to Login</span>
      </div>     

<div class="card overflow-hidden">
  <div class="row no-gutters row-bordered row-border-light">
    <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">
              <h4 class="font-weight-bold py-3 mb-4">Settings Page</h4>
              <div class="settings_photo">
                <img src="blank-profile.png" alt="A Blank Profile Avatar" class="d-block ui-w-80" width="200" height="200"/>
                <div class="media-body ml-4">
                  <br></br>
                  <form>
                  <label class="btn btn-outline-primary">
                    Upload new photo
                    <input type="file" class="account-settings-fileinput"/>
                    <br></br>
                    <input type="submit" value="Submit" class="account-settings-fileinput"/>
                  </label> &nbsp;
                  </form>
                  

                  <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
              <hr class="border-light m-0"/>

              <div class="card-body">
                <div class="form-group">
                  <label class="form-label">Username: </label>
                  <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                  <label class="form-label">Name: </label>
                  <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                  <label class="form-label">E-mail: </label>
                  <input type="text" class="form-control mb-1"/>
                </div>
              </div>

            </div>
            <div class="tab-pane fade" id="account-change-password">
              <div class="card-body pb-2">

                <div class="form-group">
                  <label class="form-label">Current password: </label>
                  <input type="password" class="form-control"/>
                </div>

                <div class="form-group">
                  <label class="form-label">New password: </label>
                  <input type="password" class="form-control"/>
                </div>

                <div class="form-group">
                  <label class="form-label">Repeat new password: </label>
                  <input type="password" class="form-control"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>

    <div class="settings-button">
      <Button type="submit" variant="outlined" class="btn btn-primary">Save changes</Button>&nbsp;
      <Button type="submit" variant="contained" class="btn btn-default">Cancel</Button>
    </div>
</div>
);
}





    
