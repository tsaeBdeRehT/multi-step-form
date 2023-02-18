import React from "react";

import './first-step.css';

const FirstStep = () => {
    return (
        <div className='step-1'>
            <div className='form-input'>
                <label htmlFor='name' className='form-input__name'>Name</label>
                <input id='name' type='text' className='form-input__input' placeholder='e.g. Stephen King'/>
            </div>

            <div className='form-input'>
                <label htmlFor='name' className='form-input__name'>Email Address</label>
                <input id='name' type='text' className='form-input__input' placeholder='e.g. stephenking@lorem.com'/>
            </div>

            <div className='form-input'>
                <label htmlFor='name' className='form-input__name'>Phone Number</label>
                <input id='name' type='text' className='form-input__input' placeholder='e.g. +1 234 567 890'/>
            </div>
        </div>
    );
}

export default FirstStep;