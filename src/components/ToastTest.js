import React from 'react';
import { Toast } from 'react-bootstrap';

export default function ToastTest ( { show } ) {

    return (
       
            <Toast
                show = {show}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                
            >
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>

       

    );
}