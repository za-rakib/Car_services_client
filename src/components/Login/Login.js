import React, { useContext } from 'react';
import firebaseConfig from './Firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory ();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }
    return (
        <div className='d-flex justify-content-center mt-5 pt-5'>
            <div className='login-aria'>
                <h1 >Please Login</h1>
                <button type="button" className="googleBtn btn btn-success mt-5" onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;