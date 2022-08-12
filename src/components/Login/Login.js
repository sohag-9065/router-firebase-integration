import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useNavigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // use Firebase hooks from github . replace manual to hooks
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
             <form >
                
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;