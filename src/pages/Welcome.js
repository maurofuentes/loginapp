import React, { useState } from 'react';
import Logout from '../components/Logout';
import { Redirect } from 'react-router-dom';

export default function Welcome(){

    const aboutContent = "";

    const [about, setAbout] = useState(aboutContent);
    
    const tokenLS = localStorage.getItem('token');
    
    const token = JSON.parse(tokenLS);
    
    const options = {
        method: 'GET',
        headers: 
        {
            'Authorization': 'Bearer ' + token
        }
    }

    const optionsLogout = {
        method: 'POST',
        headers: 
        {
            'Authorization': 'Bearer ' + token
        }
    }

    const getAbout = async () => {
    
        const respuesta = await fetch("https://redis-auth.herokuapp.com/about", options );
        
        const datos = await respuesta.json();

        setAbout(datos.message);

    }

    getAbout();

    const handleClickLogout = () => {
    
        localStorage.removeItem('token');

        // const respuesta = await fetch("https://redis-auth.herokuapp.com/auth/logout", optionsLogout );

        // ( respuesta.status === 200 && localStorage.removeItem( 'token') );
        
    }

    return(
        <div className="container mt-3 border border-primary shadow-lg p-3 mb-5 bg-white rounded text-center">            
            <h3>{about}</h3>
            <Logout
                handleClickLogout = { handleClickLogout }
            />
            { tokenLS === null && <Redirect to = "/" />}
        </div>
    );
}