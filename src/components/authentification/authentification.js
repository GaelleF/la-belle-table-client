import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Redirect} from '@reach/router'
import * as firebase from 'firebase'

// Add additional services that you want to use
require("firebase/auth");

export default class Authentification extends React.Component {
  state = {
    open: true,
    redirect: false,
    email: '',
    password:'',
    pseudo: ''
  };

  handleConnexion = (event) => {
    this.setState({ open: false });
    console.log('Auth event ', this.state.email, this.state.pseudo, this.state.password)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((res)=> console.log(res.user.uid))
    .catch((error) => {
      console.error(error.message)
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res=> console.log('signin ', res))
      .catch((error) => {
        console.error(error.message)
      });
    })
    
    
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ redirect: true });
    
  };

  render() {
    if (this.redirect) {
      return<router><Redirect to='/'/></router>
       
    }
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Connexion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pour poster une photo ou voter, il faut te connecter!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="auth__email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={(event)=>this.setState({email: event.target.value}) }
            />
            <TextField
              autoFocus
              margin="dense"
              id="auth__pseudo"
              label="Pseudo"
              type="pseudo"
              fullWidth
              onChange={(event)=>this.setState({pseudo: event.target.value}) }
            />
            <TextField
              autoFocus
              margin="dense"
              id="auth__password"
              label="Mot de passe"
              type="password"
              fullWidth
              onChange={(event)=>this.setState({password: event.target.value}) }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annuler
            </Button>
            <Button onClick={this.handleConnexion} color="primary">
              Connexion
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
