import React from "react";
import FormFooter from "../form-footer/form-footer";
import FirstStep from "../first-step/first-step";
import PlanCard from "../plan-card/plan-card";

import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

import './form.css';

const Form = ({onNextClick, onBackClick, currentStep,
                  currentStepInfo, billingType, onBillingTypeChange, planInfo, currentPlan, onPlanChange}) => {

    const {header, description} = currentStepInfo;
    const isMonthly = billingType === 'monthly';
    const monthly = isMonthly ? 'current' : '';
    const yearly = isMonthly ? '' : 'current';

    const plans = planInfo.map((el,id) => {
        const active = id === currentPlan ? 'active-plan' : '';
        const price = isMonthly ? el.monthly : el.yearly;
        const sale = isMonthly ? 'hide' : '';
        return (
            <PlanCard
                name = {el.name}
                image = {el.image}
                price = {price}
                active = {active}
                id = {id}
                onClick = {onPlanChange}
                saleVisible = {sale}
            />
        );
    });

    return (
        <div className='form'>
            <div>
                <h1 className='form__header'>{header}</h1>
                <span className='form__description'>{description}</span>
            </div>

            <div className='form__content'>
                <div className='step-2'>
                    <div className='form-plans'>
                        {plans}
                    </div>

                    <div className='form-switch'>
                        <label className={'form-switch__name ' + monthly}>Monthly</label>
                        <label className='plans-switch'>
                            <input
                                type='checkbox'
                                role='switch'
                                id='switch'
                                className='plans-switch__checkbox'
                                onChange={onBillingTypeChange}
                            />
                            <span className='plans-switch__slider'></span>
                        </label>
                        <label className = {'form-switch__name ' + yearly}>Yearly</label>
                    </div>

                </div>
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