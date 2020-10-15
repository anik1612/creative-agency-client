import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import brandImg from '../../images/logos/logo.png'
import googleIcon from '../../images/google.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    // google login
    const handleGoogleLogin = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                console.log(result);
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    image: photoURL,
                };
                handleResponse(signedInUser, true)
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    // handle response
    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
          history.replace(from);
        }
      }


    // create account (this feature i will add soon!)
    const createAccount = () => {
        alert('sorry, this feature is not available now!')
    }

    return (
        <div>
            <div className="login-container d-flex align-items-center flex-column">
                <Link to="/home" className='brand-img mb-5'>
                    <img style={{ height: '50px' }} className='mt-5' src={brandImg} alt="" />
                </Link>
                <div className='login-card-container p-5 d-flex align-items-center'>
                    <div className='login-card'>
                        <div className='login-card-text'>
                            <h3 className='text-center mb-4'>Login With</h3>
                        </div>

                        <button onClick={handleGoogleLogin} className='btn btn-block btn-outline-dark border rounded-pill px-4'>
                            <div className='d-flex align-items-center justify-content-around'>
                                <div>
                                    <img className='mr-3' style={{ height: '30px' }} src={googleIcon} alt="" />
                                </div>
                                <div>
                                    <p className='m-0'>Continue with Google</p>
                                </div>
                            </div>
                        </button>

                        <div className='mt-3'>
                            <span>Don't have an account?</span> <Link onClick={() => createAccount()}>Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;