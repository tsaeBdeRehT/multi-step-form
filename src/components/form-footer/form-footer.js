import React from "react";
import {Link} from "react-router-dom";
import './form-footer.css';

const FormFooter = ({onNextClick, onBackClick, nextLink, backLink, visible, leftText = 'Next Step'}) => {
    const confirm = leftText === "Next Step" ? '' : ' confirm';

    return (
        <div className='form-footer'>
            <Link to={backLink}
                className={'form-footer__back ' + visible}
                onClick={onBackClick}
            >
                Go Back
            </Link>
            <Link to={nextLink}
                className={'form-footer__next' + confirm}
                onClick={onNextClick}
            >
                {leftText}
            </Link>
        </div>
    );
}

export default FormFooter;