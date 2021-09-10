import React from 'react';
import './Settings.css';
import { useHistory } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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
<div class="container light-style flex-grow-1 container-p-y">
<h2 className="go-back"><ArrowBackIcon className='ArrowBack_icon link' onClick={goToProfile}/>  
      Return To Profile </h2>
<h4 class="font-weight-bold py-3 mb-4">
  Settings Page
</h4>

<div class="card overflow-hidden">
  <div class="row no-gutters row-bordered row-border-light">
    <div class="col-md-3 pt-0">
      <div class="list-group list-group-flush account-settings-links">
        <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
        
        <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
        
      </div>
    </div>
    <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">

              <div class="card-body media align-items-center">
                <img src="blank-profile.png" alt="A Blank Profile Avatar" class="d-block ui-w-80" width="200" height="200"/>
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Upload new photo
                    <input type="file" class="account-settings-fileinput"/>
                  </label> &nbsp;
                  

                  <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
              <hr class="border-light m-0"/>

              <div class="card-body">
                <div class="form-group">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control mb-1" value=""/>
                </div>
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" value=""/>
                </div>
                <div class="form-group">
                  <label class="form-label">E-mail</label>
                  <input type="text" class="form-control mb-1" value=""/>
                </div>
              </div>

            </div>
            <div class="tab-pane fade" id="account-change-password">
              <div class="card-body pb-2">

                <div class="form-group">
                  <label class="form-label">Current password</label>
                  <input type="password" class="form-control"/>
                </div>

                <div class="form-group">
                  <label class="form-label">New password</label>
                  <input type="password" class="form-control"/>
                </div>

                <div class="form-group">
                  <label class="form-label">Repeat new password</label>
                  <input type="password" class="form-control"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-right mt-3">
      <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
      <button type="button" class="btn btn-default">Cancel</button>
    </div>

  </div>
</div>
);
}





    
