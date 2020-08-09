import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import { Redirect } from 'react-router-dom';

export default function Register(){

    const userData = {
        fullname : "",
        email : "",
        password : "",
        passwordconfirm : ""
    }

    let errors = [];

    const answStatus = 0;
    
    const [userValues, setUserValues] = useState(userData);
  
    const [status, setStatus] = useState(answStatus);

    const onChangeForm = e =>{

        setUserValues(
          
            {
              ...userValues,
              [e.target.name] : e.target.value
            }
          
        );
    
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        
        //=====inputs validation=====>
        
        ( userValues.fullname === "" && errors.push("fullname") );

        ( userValues.fullname === "" && alert("Fullname field cannot be empty") );

        ( userValues.email === "" && errors.push("email") );

        ( userValues.email === "" && alert("Email field cannot be empty") );

        (userValues.password.length < 5 && alert("Invalid Password. Minimum of 5 characters required.") );
        
        (userValues.password.length < 5 && errors.push("password length invalid") );
        
        (userValues.password !== userValues.passwordconfirm && errors.push("password") );

        (userValues.password !== userValues.passwordconfirm && alert("The passwords do not match") );
        
        //=====>fetch=====>

        const data = JSON.stringify( userValues );
        
        const options = {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        } 

        if(errors.length === 0){
            
            const asyncTest = async () => {
        
                const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/register", options );
                
                if ( respuesta.status === 200 ){

                    alert("Congratulations " + userValues.fullname + "! Your account has been created.");

                    setStatus(200);

                } else {

                    alert("Failure. Try again.");
                }

            }
    
            asyncTest();

        } 
    }



    return(
        <div className="container h-100 mt-5 text-centers">
            <div className="row justify-content-center h-100">
                <div className="col-sm-8 align-self-center">
                    <div className="container mt-3 border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                        <RegisterForm
                            fullname = { userValues.fullname }
                            email = { userValues.email }
                            password = { userValues.password }
                            passwordConfirm = { userValues.passwordconfirm}
                            onChangeForm = { onChangeForm }
                            handleSubmit = { handleSubmit }
                        />
                        { status === 200 && <Redirect to="/" /> }
                    </div>
                </div>
            </div>
        </div>
        
    );

}