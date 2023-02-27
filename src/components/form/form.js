import React from "react";
import FormFooter from "../form-footer/form-footer";
import FirstStep from "../first-step/first-step";
import SecondStep from "../second-step/second-step";
import ThirdStep from "../third-step/third-step";

import './form.css';

const Form = ({onNextClick, onBackClick, currentStep,
                  currentStepInfo, billingType, onBillingTypeChange, planInfo, currentPlan, onPlanChange}) => {

    const {header, description} = currentStepInfo;

    return (
        <div className='form'>
            <div>
                <h1 className='form__header'>{header}</h1>
                <span className='form__description'>{description}</span>
            </div>

            <div className='form__content'>
                {/*<FirstStep/>*/}
                {/*<SecondStep*/}
                {/*    planInfo = {planInfo}*/}
                {/*    billingType = {billingType}*/}
                {/*    onPlanChange = {onPlanChange}*/}
                {/*    currentPlan = {currentPlan}*/}
                {/*    onBillingTypeChange = {onBillingTypeChange}*/}
                {/*/>*/}
                <ThirdStep/>
            </div>

            <FormFooter
                onNextClick = {onNextClick}
                onBackClick = {onBackClick}
                currentStep = {currentStep}
            />
        </div>
    );
}

export default Form;