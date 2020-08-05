import React from 'react';

export default function Welcome(){

    const getAbout = async () => {

        const tokenLS = localStorage.getItem('token');

        const token = JSON.parse(tokenLS);

        console.log(token);
        // const data = JSON.stringify( userValues );
        
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
    }

    getAbout();

    return(
        <h3>Welcome...</h3>
    );
}