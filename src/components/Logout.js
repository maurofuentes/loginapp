import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout ( { handleClickLogout }) {

    return (
        <Link to = "/">
            <button 
                className = "btn btn-sm btn-primary"
                onClick = { handleClickLogout }
            > 
                Logout
            </button>        
        </Link>
    );
}