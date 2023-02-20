import React from "react";

import './second-step.css';
import PlanCard from "../plan-card/plan-card";

const SecondStep = ({planInfo, billingType, currentPlan, onPlanChange, onBillingTypeChange}) => {

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
                key = {id}
                onClick = {onPlanChange}
                saleVisible = {sale}
            />
        );
    });

    return (
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
    );
}

export default SecondStep;