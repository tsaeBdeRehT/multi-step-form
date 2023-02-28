import React from "react";
import image from '../../assets/images/icon-thank-you.svg';
import './congrats.css'
const Congrats = () => {
    return (
        <div className='thank-you'>
            <img src={image}/>
            <h1 className='header'>Thank you!</h1>
            <p className='text'>Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    );
}

export default Congrats;