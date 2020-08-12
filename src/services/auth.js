
export const apiLogin = async ( userValues ) => {

    const api = process.env.REACT_APP_URL_API;
    
    const data = JSON.stringify( userValues );
    
    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {

        const respuesta = await fetch( api + "/auth/login", options );

        if (respuesta.status !== 200) {

            throw new Error("Email or Password invalid. Please Check your registered account and try again.");

        }
        
        const datos = await respuesta.json();        
        
        return datos;
        
    } catch ( e ) {

        throw e;
        
    }            
    

}