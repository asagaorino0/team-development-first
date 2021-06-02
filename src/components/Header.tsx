import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import { AppBar, Toolbar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { UserType } from '../types/UserType';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
// }));

const Header = () => {
  const [avatarG, setAvatarG] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameG, setNameG] = useState<string>('');
  const history = useHistory();
  const onPageA = () => {
    history.push('/PageA');
  };
  const onPageB = () => {
    history.push('/PageB');
  };
  const example = () => {
    console.log(
      '(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)'
    );
  };
  const onPageC = () => {
    history.push('/PageC');
  };
  const handleClick = () => {
    setNameG(`${name}`);
    window.alert(`${name}` + 'さん！ようこそ (｀・ω・´)');
  };
  const googleClick = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'jp';
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const nameG = result.user?.displayName;
        setNameG(`${nameG}`);
        const avatarG = result.user?.photoURL;
        console.log(avatarG);
        setAvatarG(`${avatarG}`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  const example = () => {
    console.log(
      '(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)(｀・ω・´)'
    );
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setNameG('');
        setAvatarG('');
        history.push('/');
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      {nameG.length === 0 && (
        <Toolbar>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            name="name"
            defaultValue=""
            autoComplete="email"
            // autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <SendIcon onClick={handleClick} />
          <Button
            variant="contained"
            fullWidth
            onClick={googleClick}
            color="primary"
          >
            google in
          </Button>
        </Toolbar>
      )}

      {nameG.length !== 0 && (
        <Toolbar>
          {avatarG.length !== 0 && (
            <img
              src={`${avatarG}`}
              alt=""
              style={{ borderRadius: '50%', width: '40px', height: '40px' }}
            />
          )}
          <h3>{`${nameG}さん！ようこそ！！`}</h3>
        </Toolbar>
      )}
      <AppBar position="static">
        {nameG.length !== 0 && (
          <Toolbar>
            <h3 onClick={onPageA}>PageA:</h3>
            <h3 onClick={onPageB}>PageB:</h3>
            <h3 onClick={onPageC}>PageC:</h3>
            <Button variant="contained" onClick={signOut}>
              Logout
            </Button>
            <br />
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
