import React from "react";
import FormFooter from "../form-footer/form-footer";
import {Link} from "react-router-dom";

import './final-step.css';

const FinalStep = ({addOns, plan, isMonthly}) => {
    const billingType = isMonthly ? 'Monthly'  : 'Yearly';
    const planPrice = isMonthly ? plan.monthly : plan.yearly;
    const bill = isMonthly ? 'mo' : 'yr';
    let totalPrice = planPrice;

    const addOnsList = addOns.map((item, id) => {
        const {header, yPrice, mPrice} = item;
        const price = isMonthly ? mPrice : yPrice;
        totalPrice += price;
        return (
            <div className='add-ons__item' key={id}>
                <div className='add-ons__title'>{header}</div>
                <div className='add-ons__price'>+${price}/{bill}</div>
            </div>
        );
    })

    return (
        <div className='step'>
            <div className='form-title'>
                <h1 className='form__header'>Finishing up</h1>
                <span className='form__description'>Double-check everything looks OK before confirming.</span>
            </div>

            <div className='bill'>
                <div className='plan'>
                    <div>
                        <div className='position__name'>{plan.name}({billingType})</div>
                        <Link to='/step2' className='change-link'>Change</Link>
                    </div>
                    <div className='plan-price'>${planPrice}/{bill}</div>
                </div>

                <div className='add-ons'>
                    {addOnsList}
                </div>

                <div className='total'>
                    <div className='total__title'>Total</div>
                    <div className='total__price'>+${totalPrice}/{bill}</div>
                </div>
            </div>

            <FormFooter
                nextLink='/final'
                backLink='/step3'
                leftText= 'Confirm'
            />
        </div>
    );
}

export default FinalStep;
