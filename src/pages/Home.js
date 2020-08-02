import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Home(){

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    }

    return(        
        <div className="container h-100 mt-5 text-center">
            <div className="row justify-content-center h-100">
                <div className="col-sm-8 align-self-center">
                    <div className="card justify-content-center">
                        <div className="card-body">
                            <LoginForm
                                handleSubmit = { handleSubmit }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}