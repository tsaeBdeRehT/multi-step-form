import React from "react";
import FormFooter from "../form-footer/form-footer";
import './first-step.css';

const FirstStep = () => {
    return (
        <div className='step'>

            <div className='form-title'>
                <h1 className='form__header'>Personal info</h1>
                <span className='form__description'>Please provide your name, email address, and phone number.</span>
            </div>

            <div className='form-content'>
                <div>
                    <div className='form-input'>
                        <label htmlFor='name' className='form-input__name'>Name</label>
                        <input id='name' type='text' className='form-input__input' placeholder='e.g. Stephen King'/>
                    </div>

                    <div className='form-input'>
                        <label htmlFor='email' className='form-input__name'>Email Address</label>
                        <input id='email' type='text' className='form-input__input' placeholder='e.g. stephenking@lorem.com'/>
                    </div>

                    <div className='form-input'>
                        <label htmlFor='number' className='form-input__name'>Phone Number</label>
                        <input id='number' type='text' className='form-input__input' placeholder='e.g. +1 234 567 890'/>
                    </div>
                </div>
            </div>

            <FormFooter
                nextLink = '/step2'
                backLink = ''
                visible = 'hidden'
            />
        </div>
    );
}

export default FirstStep;