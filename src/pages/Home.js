import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';

export default function Home(){

    const userData = {
        email : "",
        password : ""
    }

    const [userValues, setUserValues] = useState(userData);

    const [status, setStatus] = useState(undefined);

    const checkToken = localStorage.getItem ( 'token' );
  
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
        
        //json data for login 
        const data = JSON.stringify( userValues );
        
        const options = {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const setLocalStorage = (datos) => {    
            localStorage.setItem('token', JSON.stringify(datos));
        } 
        
        const asyncTest = async () => {

            try {

                const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/login", options );

                const datos = await respuesta.json();
    
                console.log(status);
    
                setLocalStorage(datos.access_token);
    
                setStatus(respuesta.status);
            } catch ( e ) {

                alert( "Email or Password invalid. Please Check your registered account and try again." );
                
            }            
            
        }

        asyncTest();
       
    }

    return(        
        <div className="container h-100 mt-5 text-centers">
            <div className="row justify-content-center h-100">
                <div className="col-sm-8 align-self-center">
                    <div className="card justify-content-center bg-light border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <LoginForm
                                email = { userValues.email }
                                password = { userValues.password }
                                onChangeForm = { onChangeForm }
                                handleSubmit = { handleSubmit }
                                status = { status }
                            />
                            { checkToken !== null && <Redirect to="/welcome" /> }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}