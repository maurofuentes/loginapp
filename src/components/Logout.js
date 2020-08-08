import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowRight } from "react-icons/bs";

export default function Logout ( { handleClickLogout }) {

    return (
        <Link to = "/">
            <button 
                className = "btn btn-sm btn-primary"
                onClick = { handleClickLogout }
            > 
                Logout <BsBoxArrowRight className="ml-1"/>
            </button>        
        </Link>
    );
}