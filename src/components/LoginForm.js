import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import Logo from '../logo.svg';

export default function LoginForm( { email, password, onChangeForm, handleSubmit, status } ){


    return(
        <div>
            <img src ={ Logo } className ="align-middle d-block mx-auto h-25 w-25 rounded-circle bg-dark" />
            <form onSubmit = { handleSubmit } name="loginForm">
                <legend className="font-weight-bold text-center">Login</legend>
                <hr/>
                <div className="form-group">
                    
                    <label htmlFor="Email1">Email address</label>
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
                    <label htmlFor="Password1">Password</label>
                    <input
                        type = "password"
                        name = "password"
                        className = "form-control"
                        id = "Password1"
                        onChange = { onChangeForm }    
                        value = { password }
                        required
                    />
                </div>
                <div className="text-center"> 
                        
                    <button type="submit" className="btn btn-primary font-italic font-weight-bold">LOGIN <FiLogIn/></button>
                    {status === 200 && <Redirect to="/welcome" />}
                        
                </div>
                <div className="text-center">
                    <Link to="/register">
                        <small>
                            Create a new Account.
                        </small>                        
                    </Link>            
                </div>
            </form>
        </div>
    );
}