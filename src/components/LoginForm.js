import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm( { handleSubmit } ){


    return(
        <form onSubmit={handleSubmit} name="loginForm">
            <legend className="font-weight-bold text-center">Login</legend>
            <hr/>
            <div className="form-group">
                <label for="Email1">Email address</label>
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="Password1">Password</label>
                <input type="password" className="form-control" id="Password1"/>
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