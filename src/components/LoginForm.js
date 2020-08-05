import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm( { email, password, onChangeForm, handleSubmit } ){


    return(
        <form onSubmit = { handleSubmit } name="loginForm">
            <legend className="font-weight-bold text-center">Login</legend>
            <hr/>
            <div className="form-group">
                <label for="Email1">Email address</label>
                <input
                    type = "email"
                    name = "email"
                    className = "form-control"
                    id = "Email1"
                    aria-describedby = "emailHelp"
                    onChange= { onChangeForm }
                    value = { email }
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="Password1">Password</label>
                <input
                    type = "password"
                    name = "password"
                    className = "form-control"
                    id = "Password1"
                    onChange = { onChangeForm }    
                    value = { password }
                />
            </div>
            <div className="text-center">                
                    <button type="submit" className="btn btn-primary">LOGIN</button>
            </div>
            <div className="text-center">
                <Link to="/register">
                    <small>
                        Create a new Account.
                    </small>                        
                </Link>            
            </div>
        </form>
    );
}