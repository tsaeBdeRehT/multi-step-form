import React from "react";
import './stepper.css';

const Stepper = () => {
    return (
        <div className='stepper'>
            <ol className='stepper-list'>
                <li className='stepper-list__item'>
                    <div className='stepper-list__item-number'>1</div>
                    <div className='stepper-list__item-content'>
                        <div className='stepper-list__item-step'>STEP 1</div>
                        <div className='stepper-list__item-title'>YOUR INFO</div>
                    </div>
                </li>
                <li className='stepper-list__item'>
                    <div className='stepper-list__item-number'>1</div>
                    <div className='stepper-list__item-content'>
                        <div className='stepper-list__item-step'>STEP 1</div>
                        <div className='stepper-list__item-title'>YOUR INFO</div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default Stepper;