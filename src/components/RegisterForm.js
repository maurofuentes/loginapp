import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm( { handleSubmit} ){

    //symbols
    const back = "<<";
    
    return(
        <form onSubmit={handleSubmit} name="registerForm">
            <legend className="font-weight-bold">Create an Account</legend>
            <hr/>
            <div className="form-group">
                <label for="FullName">Full Name</label>
                <input type="text" className="form-control" id="FullName"/>
            </div>
            <div className="form-group">                
                <label for="Email1">Email address</label>
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="Password">Password</label>
                <input type="password" className="form-control" name="Password" id="Password"/>
            </div>
            <div className="form-group">
                <label for="PasswordConfirm">Confirm password</label>
                <input type="password" className="form-control" name="PasswordConfirm" id="PasswordConfirm"/>
            </div>
            <div className="row">
                <div className="col-6 text-right">
                    <Link to="/">
                        <small>
                           {back} Back to Home.
                        </small>
                    </Link>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">SIGN IN</button>                    
                </div>
            </div>
        </form>
    );
}