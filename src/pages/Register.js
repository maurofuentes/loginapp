import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register(){

    const userData = {
        fullname : "",
        email : "",
        password : "",
        passwordconfirm : ""
    }

    const [userValues, setUserValues] = useState(userData);
  
    const onChangeForm = e =>{

        setUserValues(
          
            {
              ...userValues,
              [e.target.name] : e.target.value,
              [e.target.name] : e.target.value,
              [e.target.name] : e.target.value,
              [e.target.name] : e.target.value
            }
          
        );
    
        console.log(userValues);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name);


        const data = JSON.stringify( userValues );
        
        const options = {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        
        const asyncTest = async () => {
    
            const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/register", options );
            
            const datos = await respuesta.json()
            console.log(datos);
        }

        asyncTest();
       
    }



    return(
        <div className="container mt-3">
            <RegisterForm
                fullname = { userValues.fullname }
                email = { userValues.email }
                password = { userValues.password }
                passwordConfirm = { userValues.passwordconfirm}
                onChangeForm = { onChangeForm }
                handleSubmit = { handleSubmit }
            />
        </div>
    );

}