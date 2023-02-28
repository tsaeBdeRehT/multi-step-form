import React from "react";

import './plan-card.css';

const PlanCard = ({name, image, price, active, id, onClick, saleVisible, bill}) => {

    return (
        <div className={'form-plan ' + active} onClick={() => onClick(id)}>
            <img src={image} className='form-plan__img'/>
            <div className='form-plan__info'>
                <h3 className='form-plan__header'>{name}</h3>
                <div className='form-plan__price'>${price}/{bill}</div>
                <div className={'form-plan__sale ' + saleVisible}>2 months free</div>
            </div>
        </div>
    );
}

export default PlanCard;