import React from "react";
import './stepper.css';

const Stepper = ({stepperData, currentStep}) => {
    const elements = stepperData.map(({number, title}) => {
        const active = number == currentStep ? 'active' : '';

        return (
            <li className='stepper-list__item' key={number}>
                <div className={'stepper-list__item-number ' + active}>{number}</div>
                <div className='stepper-list__item-content'>
                    <div className='stepper-list__item-step'>STEP {number}</div>
                    <div className='stepper-list__item-title'>{title}</div>
                </div>
            </li>
        );
    });

    return (
        <div className='stepper'>
            <ol className='stepper-list'>
                {elements}
            </ol>
        </div>
    );
}

export default Stepper;