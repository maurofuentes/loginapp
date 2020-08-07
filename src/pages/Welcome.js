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

    const getAbout = async () => {
    
        const respuesta = await fetch("https://redis-auth.herokuapp.com/about", options );
        
        const datos = await respuesta.json();

        setAbout(datos.message);
    }

    getAbout();

    const handleClickLogout = () => {
        localStorage.removeItem( 'token' );
    }

    return(
        <div>
            
            <h3>{about}</h3>
            <Logout
                handleClickLogout = { handleClickLogout }
            />
            { tokenLS === null && <Redirect to = "/"/>}            
        </div>
    );
}