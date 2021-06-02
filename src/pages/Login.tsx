import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../config/firebase';
import { useParams, useHistory } from 'react-router-dom';
import { UserType } from '../types/UserType';


// const Login: React.FC<UserType> = () => {
export function Login() {
    const history = useHistory()
    // const [nameH, setNameH] = useState<UserType>(); ('')



    const googleClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/admin.directory.customer.readonly');
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'jp';
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user)

                // ...
                const name = (result.user?.displayName)
                // console.log(nameH)
                console.log(name)
                // setNameH(name)
                // const avaterGoogle = (user.photoURL)
                // history.push(`/Header/${nameH}`)
                // setGlobalState({
                //     type: NAME_GOOGLE,
                //     name,
                //     avater: avaterGoogle,
                // });
                // console.log(avaterGoogle)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    return (
        <div>
            <Button
                variant="contained"
                fullWidth
                onClick={googleClick}
                color="primary"
            >
                google in
                    </Button>
        </div>
    )
}

export default Login
