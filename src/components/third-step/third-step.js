import React from "react";
import Checkbox from "../checbox/checkbox";

import './third-step.css';
import FormFooter from "../form-footer/form-footer";

const ThirdStep = ({addOnsInfo, isMonthly, pickAddon}) => {
    const checkboxes = addOnsInfo.map((item, id) => {
        const {header, description, yPrice, mPrice, checked} = item
        const price = isMonthly ? mPrice : yPrice;
        const bill = isMonthly ? 'mo' : 'yr';
        return <Checkbox
            header = {header}
            description={description}
            price = {price}
            bill = {bill}
            checked = {checked}
            id = {id}
            key = {id}
            pickAddon={pickAddon}
        />
    });

    return (
        <div className='step'>
            <div className='form-title'>
                <h1 className='form__header'>Pick add-ons</h1>
                <span className='form__description'>Add-ons help enhance your gaming experience.</span>
            </div>

            <div>
                {checkboxes}
            </div>

            <FormFooter
                nextLink = '/step4'
                backLink = '/step2'
            />
        </div>
    );
}

export default ThirdStep;