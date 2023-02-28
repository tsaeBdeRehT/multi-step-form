import React from "react";
import {Link} from "react-router-dom";
import './stepper.css';
import {useLocation} from "react-router-dom";

const Stepper = ({stepperData}) => {
    const paths = ['/', '/step2', '/step3', '/step4'];
    const currentStep = paths.indexOf(useLocation().pathname) + 1;

    const elements = stepperData.map(({number, title}) => {
        const active = number == currentStep ? 'active' : '';

        return (
            <Link to={paths[number-1]} className='stepper-list__item' key={number}>
                <div className={'stepper-list__item-number ' + active}>{number}</div>
                <div className='stepper-list__item-content desktop'>
                    <div className='stepper-list__item-step'>STEP {number}</div>
                    <div className='stepper-list__item-title'>{title}</div>
                </div>
            </Link>
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