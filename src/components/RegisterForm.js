import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm( { fullname, email, password, passwordConfirm, onChangeForm, handleSubmit} ){

    //symbols
    const back = "<<";
    
    return(
        <form onSubmit={handleSubmit} name="registerForm">
            <legend className="font-weight-bold">Create an Account</legend>
            <hr/>
            <div className="form-group">
                <label for="fullname">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    name = "fullname"
                    id="fullname"
                    value = { fullname }
                    onChange = { onChangeForm }
                />
            </div>
            <div className="form-group">                
                <label for="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name = "email"
                    id="email"
                    aria-describedby="emailHelp"
                    value = { email }
                    onChange = { onChangeForm }
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    value = { password }
                    onChange = { onChangeForm }
                />
            </div>
            <div className="form-group">
                <label for="passwordconfirm">Confirm password</label>
                <input
                    type="password"
                    className="form-control"
                    name="passwordconfirm"
                    id="passwordconfirm"
                    value = { passwordConfirm }
                    onChange = { onChangeForm } 
                />
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