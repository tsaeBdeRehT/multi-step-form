import React from "react";

import './second-step.css';
import PlanCard from "../plan-card/plan-card";
import FormFooter from "../form-footer/form-footer";

const SecondStep = ({planInfo, isMonthly, currentPlan, onPlanChange, onBillingTypeChange}) => {

    const monthly = isMonthly ? 'current' : '';
    const yearly = isMonthly ? '' : 'current';

    const plans = planInfo.map((el,id) => {
        const active = id === currentPlan ? 'active-plan' : '';
        const price = isMonthly ? el.monthly : el.yearly;
        const bill = isMonthly ? 'mo' : 'yr';
        const sale = isMonthly ? 'hide' : '';
        return (
            <PlanCard
                name = {el.name}
                image = {el.image}
                price = {price}
                active = {active}
                bill = {bill}
                id = {id}
                key = {id}
                onClick = {onPlanChange}
                saleVisible = {sale}
            />
        );
    });

    return (
        <div className='step'>
            <div className='form-title'>
                <h1 className='form__header'>Select your plan</h1>
                <span className='form__description'>You have the option of monthly or yearly billing.</span>
            </div>

            <div className='form-content'>
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
                            checked={!isMonthly}
                            onChange={onBillingTypeChange}
                        />
                        <span className='plans-switch__slider'></span>
                    </label>
                    <label className = {'form-switch__name ' + yearly}>Yearly</label>
                </div>
            </div>

            <FormFooter
                nextLink = '/step3'
                backLink = '/step1'
            />

        </div>
    );
}

export default SecondStep;