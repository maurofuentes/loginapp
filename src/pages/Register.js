import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register(){

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name);


        const data = JSON.stringify({
            fullname: "mftest",
            password: "123456",
            email: "mauro@mail.com"
        })
        
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
                handleSubmit = { handleSubmit }
            />
        </div>
    );

}