import React, { useState } from 'react';

export default function Welcome(){

    const aboutContent = "";

    const [about, setAbout] = useState(aboutContent);

    const getAbout = async () => {

        const tokenLS = localStorage.getItem('token');

        const token = JSON.parse(tokenLS);

        console.log(token);
        
        const options = {
            method: 'GET',
            headers: 
            {
                'Authorization': 'Bearer ' + token
            }
        }
    
        const respuesta = await fetch("https://redis-auth.herokuapp.com/about", options );
        
        const datos = await respuesta.json();

        console.log(datos.message);

        setAbout(datos.message);
    }

    getAbout();

    return(
        <div>
            
            <h3>{about}</h3>
        </div>
    );
}