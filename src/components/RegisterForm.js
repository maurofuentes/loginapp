import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { FaUserAlt, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";


export default function RegisterForm( { fullname, email, password, passwordConfirm, onChangeForm, handleSubmit} ){

    //symbols
    const back = "<<";
    
    return(
        <form onSubmit={handleSubmit} name="registerForm">
            <legend className="font-weight-bold">Create an Account</legend>
            <hr/>
            <div className="form-group">
                <FaUserAlt className="mr-2"/><label htmlFor="fullname">Full Name</label>
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
                <FaEnvelope className="mr-2"/> <label htmlFor="email">Email address</label>
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
                <FaLock className="mr-2" /><label htmlFor="password">Password</label>
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
                <FaCheck className="mr-2" /><label htmlFor="passwordconfirm">Confirm password</label>
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
                    <button type="submit" className="btn btn-primary font-italic">SIGN IN <BsPencilSquare className="ml-1"/></button>                    
                </div>
            </div>
        </form>
    );
}