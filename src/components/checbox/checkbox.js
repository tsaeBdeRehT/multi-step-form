import React from "react";

import './checkbox.css';

const CheckBox = ({header, description, price, bill, checked, id, pickAddon}) => {
    const style = checked ? ' checked' : '';

    return (
        <div className={'add-on' + style} >
                <input type='checkbox' id={'checkbox' + id} checked={checked} className='checkbox' onChange={() => pickAddon(id)}/>
                <label htmlFor={'checkbox' + id}>
                    <div className='add-on-content'>
                        <div >
                            <div className='add-on__header'>{header}</div>
                            <div className='add-on__description'>{description}</div>
                        </div>
                        <span className='add-on__price'>+${price}/{bill}</span>
                    </div>
                </label>
        </div>
    );
}

export default CheckBox;