import React from "react";

import './form-footer.css';

const FormFooter = ({onNextClick, onBackClick, currentStep}) => {
    const hidden = currentStep === 1 ? 'hidden' : ''
    return (
        <div className='form-footer'>
            <button
                className={'form-footer__back ' + hidden}
                onClick={onBackClick}
            >
                Go Back
            </button>
            <button
                className='form-footer__next'
                onClick={onNextClick}
            >
                Next Step
            </button>
        </div>
    );
}

export default FormFooter;