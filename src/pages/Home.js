import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';
import { apiLogin } from '../services/auth';


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

    const handleSubmit = async e => {
        e.preventDefault();        
        
        //     try {

        //         const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/login", options );

        //         const datos = await respuesta.json();
    
        //         console.log(status);
    
        //         setLocalStorage(datos.access_token);
    
        //         setStatus(respuesta.status);

        //     } catch ( e ) {

        //         alert( "Email or Password invalid. Please Check your registered account and try again." );
                
        //     }            
            
        // }
        try {

            const datos = await apiLogin( userValues );

            setLocalStorage(datos.access_token);

            setStatus(200);

        } catch (error) {
            
            alert(error.message);

        }
       
    }

    const setLocalStorage = (datos) => {    
        localStorage.setItem('token', JSON.stringify(datos));
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