import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Home(){

    return(        
        <div className="container h-100 mt-5 text-center">
            <div className="rox justify-content-center h-100">
                <div className="col-sm-8 align-self-center text-center">
                    <div className="card w-50">
                        <div className="card-body">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}